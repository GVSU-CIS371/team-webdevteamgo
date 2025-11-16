import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  updateDoc,
  deleteDoc,
  Timestamp,
  addDoc,
  getDoc,
  getDocs,
  arrayUnion,
  orderBy,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course, ActiveCheckIn, Student, CheckIn } from "../types";
import { v4 as uuid } from "uuid";

function toActive(a: any): ActiveCheckIn {
  if (!a) return null;
  return {
    ...a,
    expiresAt: (a.expiresAt as Timestamp).toDate(),
    startedAt: (a.startedAt as Timestamp).toDate(),
  };
}

function toStudentsList(a: any): Student[] {
  if (!a) return [];
  // If already an array of objects
  if (Array.isArray(a)) {
    return a
      .filter(Boolean)
      .map((s: any) => ({ email: String(s.email || '').toLowerCase(), name: String(s.name || '') }))
      .filter((s: Student) => s.email.includes('@'));
  }
  // If stored as an object/map of { key: { email, name } }
  if (typeof a === 'object') {
    return Object.values(a as Record<string, any>)
      .map((s: any) => ({ email: String(s.email || '').toLowerCase(), name: String(s.name || '') }))
      .filter((s: Student) => s.email.includes('@'));
  }
  // Legacy: array of email strings
  if (typeof a === 'string') {
    const email = a.toLowerCase();
    return email.includes('@') ? [{ email, name: '' }] : [];
  }
  return [];
}

export function listenMyCourses(
  instructorId: string,
  cb: (courses: Course[]) => void
): Unsubscribe {
  const q = query(collection(db, "courses"), where("instructorId", "==", instructorId));
  return onSnapshot(
    q,
    (snap) => {
      console.log("[courses] snapshot size:", snap.size);
      const rows = snap.docs.map((d) => {
        const data = d.data() as any;
        return {
          id: d.id,
          instructorId: data.instructorId,
          name: data.name,
          code: data.code,
          semester: data.semester,
          // Read from new field first, then fall back to legacy shapes
          studentsList: data.studentsList
            ? toStudentsList(data.studentsList)
            : (data.students_list
                ? toStudentsList(data.students_list)
                : (Array.isArray(data.students)
                    ? (data.students as string[]).map((e) => ({ email: String(e).toLowerCase(), name: '' }))
                    : []
                  )
              ),
          activeCheckInRef: data.activeCheckInRef ?? null,
          activeCheckIn: toActive(data.activeCheckIn),
        } as Course;
      });
      console.log("[courses] first doc:", rows[0]);
      cb(rows);
    },
    (err) => {
      console.error("[courses] onSnapshot error:", err);
      // surface the error by calling back an empty array (optional)
      cb([]);
    }
  );
}

function randomCode(len = 4) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: len }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

/**
 * Start a check-in session for a course.
 * Creates a document in `checkins` and stores a reference on the course doc.
 * Also keeps a lightweight `activeCheckIn` object on the course for UI convenience.
 */
export async function startCheckIn(courseId: string, minutes = 5): Promise<CheckIn> {
  const id = uuid();
  const passcode = randomCode(4);
  const startedAtJs = new Date();
  const expiresJs = new Date(Date.now() + minutes * 60_000);

  // Fetch minimal course fields for denormalization (instructorId optional)
  const courseRef = doc(db, "courses", courseId);
  const courseSnap = await getDoc(courseRef);
  const courseData = courseSnap.exists() ? (courseSnap.data() as any) : {};

  // Create typed check-in object
  const checkIn: CheckIn = {
    id,
    courseId,
    instructorId: (courseData?.instructorId as string | undefined) || undefined,
    passcode,
    startedAt: startedAtJs,
    expiresAt: expiresJs,
    endedAt: null,
    studentEmails: [],
  };

  // Create check-in document
  const checkInsCol = collection(db, "checkins");
  const checkInDocRef = await addDoc(checkInsCol, {
    id: checkIn.id, // store generated id for easy queries
    courseId: checkIn.courseId,
    instructorId: checkIn.instructorId ?? null,
    passcode: checkIn.passcode,
    startedAt: Timestamp.fromDate(checkIn.startedAt),
    expiresAt: Timestamp.fromDate(checkIn.expiresAt),
    endedAt: null,
    studentEmails: checkIn.studentEmails,
  });

  // Update course with reference + convenience info for UI
  await updateDoc(courseRef, {
    activeCheckInRef: checkInDocRef,
    activeCheckIn: {
      id,
      passcode,
      expiresAt: Timestamp.fromDate(expiresJs),
      startedAt: Timestamp.fromDate(startedAtJs),
    },
  });

  return checkIn;
}

/**
 * End the current check-in session for a course.
 * Updates `endedAt` on the check-in doc and clears the course reference + UI object.
 */
export async function endCheckIn(courseId: string) {
  const courseRef = doc(db, "courses", courseId);
  const snap = await getDoc(courseRef);
  if (!snap.exists()) return;
  const data = snap.data() as any;
  const ref = data?.activeCheckInRef;

  try {
    if (ref) {
      await updateDoc(ref, { endedAt: Timestamp.fromDate(new Date()) });
    }
  } finally {
    await updateDoc(courseRef, { activeCheckInRef: null, activeCheckIn: null });
  }
}

/**
 * Append a student email to the active check-in's studentEmails array.
 * If you already know the check-in id, prefer recordStudentCheckInById.
 */
export async function recordStudentCheckIn(courseId: string, email: string) {
  const courseRef = doc(db, "courses", courseId);
  const snap = await getDoc(courseRef);
  if (!snap.exists()) return;
  const data = snap.data() as any;
  const ref = data?.activeCheckInRef;
  if (!ref) return;
  await updateDoc(ref, { studentEmails: arrayUnion(String(email).toLowerCase()) });
}

/**
 * Append a student email given a check-in document id.
 */
export async function recordStudentCheckInById(checkInId: string, email: string) {
  const ref = doc(db, "checkins", checkInId);
  await updateDoc(ref, { studentEmails: arrayUnion(String(email).toLowerCase()) });
}

/**
 * Update course information (name, code, semester)
 * @param courseId - The ID of the course to update
 * @param updates - Object containing the fields to update
 */
export async function updateCourse(
  courseId: string,
  updates: {
    name?: string;
    code?: string;
    semester?: string;
    studentsList?: Student[];
  }
) {
  try {
    const courseRef = doc(db, "courses", courseId);
    await updateDoc(courseRef, updates);
    console.log(`[courses] Updated course ${courseId}:`, updates);
  } catch (error) {
    console.error(`[courses] Error updating course ${courseId}:`, error);
    throw error;
  }
}

/**
 * Add course information (instructorId, name, code, semester, students)
 */
export async function addCourse(
  course: {
    instructorId: string;
    name: string;
    code: string;
    semester: string;
    studentsList: Student[];
  }
) {
  try {
    const docRef = await addDoc(collection(db, "courses"), course);
    console.log(`[courses] Added new course with ID: ${docRef.id}`, course);
    return docRef.id;
  } catch (error) {
    console.error("[courses] Error adding course:", error);
    throw error;
  }
}


/**
 * Delete a course from Firestore
 * @param courseId - The ID of the course to delete
 */
export async function deleteCourse(courseId: string) {
  try {
    const courseRef = doc(db, "courses", courseId);
    await deleteDoc(courseRef);
    console.log(`[courses] Deleted course ${courseId}`);
  } catch (error) {
    console.error(`[courses] Error deleting course ${courseId}:`, error);
    throw error;
  }
}

/**
 * Get a single course by ID
 * @param courseId - The ID of the course to fetch
 * @returns Course object or null if not found
 */
export async function getCourse(courseId: string): Promise<Course | null> {
  try {
    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);
    
    if (!courseSnap.exists()) {
      return null;
    }

    const data = courseSnap.data() as any;
    return {
      id: courseSnap.id,
      instructorId: data.instructorId,
      name: data.name,
      code: data.code,
      semester: data.semester,
      studentsList: data.studentsList
        ? toStudentsList(data.studentsList)
        : [],
      activeCheckInRef: data.activeCheckInRef ?? null,
      activeCheckIn: toActive(data.activeCheckIn),
    } as Course;
  } catch (error) {
    console.error(`[courses] Error fetching course ${courseId}:`, error);
    throw error;
  }
}

/**
 * Get all check-ins for a specific course, ordered by start time (most recent first)
 * @param courseId - The ID of the course
 * @returns Array of CheckIn objects
 */
export async function getCourseCheckIns(courseId: string): Promise<CheckIn[]> {
  try {
    const checkInsCol = collection(db, "checkins");
    const q = query(
      checkInsCol,
      where("courseId", "==", courseId),
      orderBy("startedAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id || doc.id,
        courseId: data.courseId,
        instructorId: data.instructorId || undefined,
        passcode: data.passcode,
        startedAt: (data.startedAt as Timestamp).toDate(),
        expiresAt: (data.expiresAt as Timestamp).toDate(),
        endedAt: data.endedAt ? (data.endedAt as Timestamp).toDate() : null,
        studentEmails: Array.isArray(data.studentEmails) ? data.studentEmails : [],
      } as CheckIn;
    });
  } catch (error) {
    console.error(`[courses] Error fetching check-ins for course ${courseId}:`, error);
    throw error;
  }
}

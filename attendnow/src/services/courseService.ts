import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  updateDoc,
  deleteDoc,
  Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course, ActiveCheckIn, Student } from "../types";
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
          students_list: data.students_list
            ? toStudentsList(data.students_list)
            : (Array.isArray(data.students) ? (data.students as string[]).map((e) => ({ email: String(e).toLowerCase(), name: '' })) : []),
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

export async function startCheckIn(courseId: string, minutes = 5) {
  const id = uuid();
  const passcode = randomCode(4);
  const expires = new Date(Date.now() + minutes * 60_000);
  await updateDoc(doc(db, "courses", courseId), {
    activeCheckIn: {
      id,
      passcode,
      expiresAt: Timestamp.fromDate(expires),
      startedAt: Timestamp.now(), // you can switch to serverTimestamp via CF if you prefer
    },
  });
  return { id, passcode, expiresAt: expires };
}

export async function endCheckIn(courseId: string) {
  await updateDoc(doc(db, "courses", courseId), { activeCheckIn: null });
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
    students_list?: Student[];
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

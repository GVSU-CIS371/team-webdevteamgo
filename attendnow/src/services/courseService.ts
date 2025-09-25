import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  updateDoc,
  Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course, ActiveCheckIn } from "../types";
import { v4 as uuid } from "uuid";

function toActive(a: any): ActiveCheckIn {
  if (!a) return null;
  return {
    ...a,
    expiresAt: (a.expiresAt as Timestamp).toDate(),
    startedAt: (a.startedAt as Timestamp).toDate(),
  };
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
          students: data.students ?? [],
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

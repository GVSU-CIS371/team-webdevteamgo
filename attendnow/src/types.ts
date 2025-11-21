import type { Timestamp } from "firebase/firestore/lite";

export type ActiveCheckIn =
  | null
  | {
      id: string;
      passcode: string;
      expiresAt: Timestamp;
      startedAt: Timestamp;
      qrUrl?: string;
    };

export type CheckIn = {
  id: string;
  courseId: string;
  instructorId?: string;
  passcode: string;
  startedAt: Timestamp; // firestore stores these as timestamps
  expiresAt:  Timestamp;
  endedAt: Timestamp | null;
  studentEmails: string[];
};

export type Student = {
  email: string;
  name: string;
};

export type Course = {
  id: string;
  instructorId: string;
  name: string;
  code: string;
  semester: string;
  studentsList: Student[];
  // Reference to active check-in doc in `checkins` (if present). Using `any` to avoid Firestore type import.
  activeCheckInRef?: any | null;
  activeCheckIn: ActiveCheckIn;
};

export type ActiveCheckIn =
  | null
  | {
      id: string;
      passcode: string;
      expiresAt: Date;
      startedAt: Date;
      qrUrl?: string;
    };

export type Course = {
  id: string;
  instructorId: string;
  name: string;
  code: string;
  semester: string;
  students: string[];
  activeCheckIn: ActiveCheckIn;
};

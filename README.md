# AttendNow — Attendance App

## I. Overview

Our app helps professors automatically track class attendance without wasting valuable teaching time. Instead of manually taking roll or relying on Blackboard's clunky system, the app shifts responsibility to students.

Professors display a QR code with a time-limited passcode at the start of class. Students in the room scan the QR or enter the passcode to check in, reducing the chance of faked attendance.

Future enhancements could include location validation and Blackboard integration.

## II. Team Responsibilities

All team members contribute to both frontend and backend:

**Frontend/UI** – Student check-in flow, instructor dashboard.

**Backend/Database** – Course and instructor data, check-in logic, and auth.

**Integration/Testing** – QR + passcode validation, unit/e2e tests, docs.

## III. Database Design (Starter Version)

Right now the starter app uses two collections only:

### Collection: instructors

- `instructorId` (string, document ID = Firebase Auth UID)
- `name` (string)
- `email` (string)

### Collection: courses

- `courseId` (string, auto ID)
- `instructorId` (string → matches instructors/instructorId)
- `name` (string)
- `code` (string)
- `semester` (string)
- `students` (array of strings = student emails)
- `activeCheckIn` (map or null)
  - When null ⇒ no check-in running
  - When a map ⇒ `{ id, passcode, expiresAt, startedAt, qrUrl? }`

### Example course doc

```json
{
  "instructorId": "tjuFeWwFszXemcH6LwNcBwHtnbW2",
  "name": "CIS 350 – Software Eng",
  "code": "CIS 350",
  "semester": "Fall 2025",
  "students": ["alice@gvsu.edu", "bob@gvsu.edu"],
  "activeCheckIn": null
}
```

Later versions will add:

- A `checkins` collection to store a history of each student check-in.
- A `sessions` collection to represent named class meetings (e.g., "Week 3 — 9/25/25"), which can then be linked to check-ins and attendance reports.

## IV. External Services

- Firebase Firestore for data
- Firebase Auth (future) for login
- QR Code Generation (future feature)

## V. Quickstart (Starter Version)

### Prerequisites

- Node.js ≥ 20
- npm (or pnpm)
- A Firebase project with Firestore enabled

### 1) Clone & Install

```bash
git clone <your-repo-url>
cd attendnow
npm install
```

### 2) Environment Setup

Create a `.env.local` in the project root:

```env
# Firebase config
VITE_FB_API_KEY=your-api-key
VITE_FB_AUTH_DOMAIN=attendnow-10de9.firebaseapp.com
VITE_FB_PROJECT_ID=attendnow-10de9
VITE_FB_STORAGE_BUCKET=attendnow-10de9.firebasestorage.app
VITE_FB_APP_ID=your-app-id

# Temporary hardcoded instructor UID (replace with auth.currentUser.uid later)
VITE_INSTRUCTOR_UID=tjuFeWwFszXemcH6LwNcBwHtnbW2
```

### 3) Firestore Seed Data (Console)

Create the following documents so the app has data to show:

**Collection: instructors**
- Doc ID = `tjuFeWwFszXemcH6LwNcBwHtnbW2`
- `name` = "Your Name"
- `email` = "youremail@example.com"

**Collection: courses**
- Doc ID = auto
- `instructorId` = "tjuFeWwFszXemcH6LwNcBwHtnbW2"
- `name` = "CIS 350 – Software Eng"
- `code` = "CIS 350"
- `semester` = "Fall 2025"
- `students` = ["alice@gvsu.edu","bob@gvsu.edu"]
- `activeCheckIn` = null

### 4) Run Locally

```bash
npm run dev
```

Open http://localhost:5173 — you should see one seeded course for your UID.

Use Start check-in / End check-in to verify Firestore updates the `activeCheckIn` field.

## VI. Notes & Next Steps

During early dev, you can temporarily relax Firestore rules to allow reads/writes; tighten them once Auth is in place.

### Next iterations:

- Add Firebase Auth and replace the env-based UID with `auth.currentUser.uid`.
- Add a `/checkin` page + backend validation for passcode and deduping (`checkins` collection).
- Generate/display a QR that encodes `courseId + checkInId`.

## VII. Assignment Details

### Term Project

Hello, Students! 👋

Your Term Project is an essential part of the course. Please review the instructions carefully to ensure a smooth and successful experience.

#### Project Instructions

**Getting Started:**
- Read the full instructions carefully.
- Understand all requirements before starting.
- Ask questions if anything is unclear.

**Tips for Success:**
- Follow guidelines closely.
- Plan your work and stay on schedule.
- Test your project regularly.

Best of luck! 🚀
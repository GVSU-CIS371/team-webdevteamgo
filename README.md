# Attendance App  

## I. Overview  
Our app helps professors automatically track class attendance without wasting valuable teaching time. Instead of manually taking roll or relying on Blackboard’s clunky system, the app shifts responsibility to students.  

Professors display a **QR code with a time-limited passcode** at the start of class. Students in the room scan the QR or enter the passcode to check in, reducing the chance of faked attendance.  

Future enhancements could include **location validation** and **Blackboard integration**.  

---

## II. Team Responsibilities  
All team members contribute to both frontend and backend:  

- **Frontend/UI** – Student check-in flow, instructor dashboard.  
- **Backend/Database** – Course/session/attendance data and auth.  
- **Integration/Testing** – QR + passcode validation, unit/e2e tests, docs.  

---

## III. Database Design  

**Collection: `instructors`**  
- `instructorId` (string, p_key)  
- `name` (string)  
- `email` (string)  
- `createdAt` (timestamp)  

**Collection: `courses`**  
- `courseId` (string, p_key)  
- `title` (string)  
- `courseCode` (string)  
- `termYear` (string)  
- `instructorId` (string, f_key → instructors/instructorId)  
- `studentEmails` (array<string>)  
- `createdAt` (timestamp)  

**Collection: `sessions`**  
- `sessionId` (string, p_key)  
- `courseId` (string, f_key → courses/courseId)  
- `sessionDate` (timestamp)  
- `startsAt` (timestamp)  
- `endsAt` (timestamp)  
- `sessionStatus` (string)  
- `passcode` (string)  
- `createdAt` (timestamp)  

**Collection: `attendance`**  
- `attendanceId` (string, p_key)  
- `sessionId` (string, f_key → sessions/sessionId)  
- `courseId` (string, f_key → courses/courseId)  
- `studentEmail` (string, f_key → courses/studentEmails)  
- `checkedInAt` (timestamp)  
- `status` (string: present/absent/late)  

---

## IV. External Services  
- **QR Code Generation** (unique, time-limited per session)  
- **(Optional) Geolocation** for proximity checks  
- **(Future) Blackboard/LMS** syncing  

---

## V. How to Run Locally

### Prerequisites
- **Node.js** ≥ 20  
- **pnpm** (recommended) or npm  
- **Firebase CLI** (`npm i -g firebase-tools`) if using Firestore/Auth locally  
- **Git**

### 1) Clone & Install
```bash
git clone <your-repo-url>
cd attendance-app
pnpm install    # or: npm install


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GGVlYJ9R)
# **Term Project**  

**Hello, Students!** 👋 

Your **Term Project** is an essential part of the course. Please review the instructions carefully to ensure a smooth and successful experience.  

- [**Project Instructions**](https://gvsu-cis371.github.io/projects/term.html)  

### **Getting Started:**  
1. **Read** the full instructions carefully.  
2. **Understand** all requirements before starting.  
3. **Ask questions** if anything is unclear.  

### **Tips for Success:**  
- Follow guidelines closely.  
- Plan your work and stay on schedule.  
- Test your project regularly.  

Best of luck! 🚀  
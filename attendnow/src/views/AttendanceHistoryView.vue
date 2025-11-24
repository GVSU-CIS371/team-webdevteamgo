<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCourse, getCourseCheckIns } from "../services/courseService";
import type { Course, CheckIn, Student } from "../types";

const route = useRoute();
const router = useRouter();

const courseId = computed(() => route.params.courseId as string);
const course = ref<Course | null>(null);
const checkIns = ref<CheckIn[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Student attendance summary
interface StudentSummary {
  email: string;
  name: string;
  attended: number;
  total: number;
  attendanceRate: number;
  isLowAttendance: boolean;
}

const ATTENDANCE_THRESHOLD = 75; // Flag students below 75%

const studentSummary = computed<StudentSummary[]>(() => {
  if (!course.value) {
    return [];
  }

  const totalSessions = checkIns.value.length;
  const summaryMap = new Map<string, StudentSummary>();

  // Initialize all students from the course
  course.value.studentsList.forEach((student) => {
    summaryMap.set(student.email.toLowerCase(), {
      email: student.email,
      name: student.name || student.email,
      attended: 0,
      total: totalSessions,
      attendanceRate: 0,
      isLowAttendance: false,
    });
  });

  // Count attendance for each student
  checkIns.value.forEach((checkIn) => {
    checkIn.studentEmails.forEach((email) => {
      const normalizedEmail = email.toLowerCase();
      const summary = summaryMap.get(normalizedEmail);
      if (summary) {
        summary.attended += 1;
      }
    });
  });

  // Calculate attendance rates and flag low attendance
  const summaries = Array.from(summaryMap.values()).map((summary) => {
    summary.attendanceRate = totalSessions > 0 ? (summary.attended / summary.total) * 100 : 0;
    summary.isLowAttendance = summary.attendanceRate < ATTENDANCE_THRESHOLD;
    return summary;
  });

  // Sort by attendance rate (lowest first to highlight issues)
  return summaries.sort((a, b) => a.attendanceRate - b.attendanceRate);
});

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;

    // Fetch course data
    const fetchedCourse = await getCourse(courseId.value);
    if (!fetchedCourse) {
      error.value = "Course not found";
      return;
    }
    course.value = fetchedCourse;

    // Fetch check-ins
    checkIns.value = await getCourseCheckIns(courseId.value);
  } catch (err) {
    console.error("Error loading attendance data:", err);
    error.value = "Failed to load attendance data. Please try again.";
  } finally {
    loading.value = false;
  }
});

function goBack() {
  router.push({ name: "dashboard" });
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getStudentNameByEmail(email: string): string {
  const student = course.value?.studentsList.find(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );
  return student?.name || email;
}
</script>

<template>
  <div class="attendance-history">
    <!-- Header -->
    <div class="header">
      <button @click="goBack" class="back-btn">← Back to Dashboard</button>
      <div v-if="course" class="course-info-header">
        <h1>{{ course.name }} - Attendance History</h1>
        <p class="course-details">{{ course.code }} | {{ course.semester }}</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading attendance data...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
      <button @click="goBack" class="btn-primary">Return to Dashboard</button>
    </div>

    <!-- Content -->
    <div v-if="!loading && !error && course" class="content">
      <!-- Student Attendance Summary Section -->
      <section class="summary-section">
        <h2>Student Attendance Summary</h2>
        <div v-if="studentSummary.length === 0" class="no-data">
          <p>No students enrolled in this course yet.</p>
        </div>
        <div v-else class="table-container">
          <table class="summary-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Sessions Attended</th>
                <th>Total Sessions</th>
                <th>Attendance Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="student in studentSummary"
                :key="student.email"
                :class="{ 'low-attendance': student.isLowAttendance }"
              >
                <td>{{ student.name }}</td>
                <td class="email">{{ student.email }}</td>
                <td class="centered">{{ student.attended }}</td>
                <td class="centered">{{ student.total }}</td>
                <td class="centered">
                  <span class="percentage" :class="{ 'low': student.isLowAttendance }">
                    {{ student.attendanceRate.toFixed(1) }}%
                  </span>
                </td>
                <td class="centered">
                  <span v-if="student.isLowAttendance" class="status-badge warning">
                    ⚠️ Low Attendance
                  </span>
                  <span v-else class="status-badge good">✓ Good</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Attendance Records Section -->
      <section class="records-section">
        <h2>Attendance Records</h2>
        <div v-if="checkIns.length === 0" class="no-data">
          <p>No check-in sessions recorded yet.</p>
          <p class="hint">Start a check-in from the dashboard to begin tracking attendance.</p>
        </div>
        <div v-else class="records-list">
          <div v-for="checkIn in checkIns" :key="checkIn.id" class="record-card">
            <div class="record-header">
              <h3>{{ formatDate(checkIn.startedAt) }}</h3>
              <span class="passcode-badge">Code: {{ checkIn.passcode }}</span>
            </div>
            <div class="record-details">
              <p class="record-time">
                <strong>Started:</strong> {{ checkIn.startedAt.toLocaleTimeString() }}
                <span class="separator">|</span>
                <strong>Ended:</strong>
                {{
                  checkIn.endedAt
                    ? checkIn.endedAt.toLocaleTimeString()
                    : "Still Active"
                }}
              </p>
              <p class="attendance-count">
                <strong>{{ checkIn.studentEmails.length }}</strong> student(s) checked in
              </p>
            </div>
            <div v-if="checkIn.studentEmails.length > 0" class="students-list">
              <h4>Students Present:</h4>
              <ul>
                <li v-for="email in checkIn.studentEmails" :key="email">
                  {{ getStudentNameByEmail(email) }}
                  <span class="student-email">({{ email }})</span>
                </li>
              </ul>
            </div>
            <div v-else class="no-students">
              <p>No students checked in for this session.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.attendance-history {
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #e5e7eb;
}

.header {
  margin-bottom: 2rem;
}

.back-btn {
  background: rgba(0, 50, 160, 0.7); /* GVSU Blue */
  color: #fff;
  border: 1px solid rgba(0, 50, 160, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  margin-bottom: 1rem;
  font-weight: 500;
}

.back-btn:hover {
  background: rgba(0, 50, 160, 0.9);
  transform: translateX(-2px);
}

.course-info-header h1 {
  margin: 0.5rem 0;
  font-size: 2rem;
  color: #f9fafb;
}

.course-details {
  color: #9ca3af;
  margin: 0;
}

/* Loading */
.loading {
  text-align: center;
  padding: 4rem 2rem;
}

.spinner {
  border: 4px solid rgba(19, 21, 92, 0.3);
  border-top: 4px solid #0ECBF0; /* GVSU Link Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Error */
.error-message {
  text-align: center;
  padding: 2rem;
  background: rgba(127, 29, 29, 0.8);
  border-radius: 8px;
  color: #fecaca;
  border: 1px solid rgba(127, 29, 29, 1);
}

.btn-primary {
  background: #0032A0; /* GVSU Blue */
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #0040c4;
}

/* Content Sections */
.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

section {
  background: rgba(19, 21, 92, 0.5); /* GVSU Midnight - lighter */
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 50, 160, 0.3); /* GVSU Blue border */
}

section h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #f9fafb;
  border-bottom: 2px solid rgba(14, 203, 240, 0.3); /* Link Blue accent */
  padding-bottom: 0.5rem;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
}

.no-data .hint {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Summary Table */
.table-container {
  overflow-x: auto;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(19, 21, 92, 0.7); /* Darker Midnight for table */
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(0, 50, 160, 0.3);
}

.summary-table thead {
  background: rgba(0, 50, 160, 0.6); /* GVSU Blue header */
}

.summary-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #f9fafb;
}

.summary-table td {
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(0, 50, 160, 0.2);
}

.summary-table tr.low-attendance {
  background: rgba(127, 29, 29, 0.5);
}

.summary-table tr:hover {
  background: rgba(0, 50, 160, 0.2); /* GVSU Blue hover */
}

.summary-table .email {
  color: #9ca3af;
  font-size: 0.9rem;
}

.summary-table .centered {
  text-align: center;
}

.percentage {
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(61, 209, 204, 0.2); /* Big Lake tint */
  color: #3DD1CC; /* Big Lake */
  border: 1px solid rgba(61, 209, 204, 0.4);
}

.percentage.low {
  background: rgba(127, 29, 29, 0.3);
  color: #fca5a5;
  border: 1px solid rgba(127, 29, 29, 0.6);
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.good {
  background: rgba(61, 209, 204, 0.2); /* Big Lake */
  color: #3DD1CC;
  border: 1px solid rgba(61, 209, 204, 0.4);
}

.status-badge.warning {
  background: rgba(127, 29, 29, 0.3);
  color: #fca5a5;
  border: 1px solid rgba(127, 29, 29, 0.6);
}

/* Records List */
.records-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.record-card {
  background: rgba(19, 21, 92, 0.6); /* Midnight */
  border: 1px solid rgba(0, 50, 160, 0.4); /* GVSU Blue border */
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.2s;
}

.record-card:hover {
  border-color: rgba(14, 203, 240, 0.5); /* Link Blue on hover */
  box-shadow: 0 2px 8px rgba(0, 50, 160, 0.2);
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.record-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #f9fafb;
}

.passcode-badge {
  background: rgba(14, 203, 240, 0.2); /* Link Blue */
  color: #0ECBF0;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(14, 203, 240, 0.4);
}

.record-details {
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 50, 160, 0.3);
}

.record-time {
  color: #9ca3af;
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.separator {
  margin: 0 0.5rem;
  color: #6b7280;
}

.attendance-count {
  margin: 0.25rem 0;
  color: #d1d5db;
}

.students-list h4 {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #d1d5db;
}

.students-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0.5rem;
}

.students-list li {
  padding: 0.5rem;
  background: rgba(0, 50, 160, 0.2); /* GVSU Blue tint */
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid rgba(0, 50, 160, 0.3);
}

.student-email {
  color: #9ca3af;
  font-size: 0.85rem;
}

.no-students {
  color: #9ca3af;
  font-style: italic;
  padding: 0.5rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .attendance-history {
    padding: 1rem;
  }

  .course-info-header h1 {
    font-size: 1.5rem;
  }

  .summary-table {
    font-size: 0.85rem;
  }

  .summary-table th,
  .summary-table td {
    padding: 0.5rem;
  }

  .students-list ul {
    grid-template-columns: 1fr;
  }

  .record-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
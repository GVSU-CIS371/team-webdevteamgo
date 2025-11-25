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

interface StudentSummary {
  email: string;
  name: string;
  attended: number;
  total: number;
  attendanceRate: number;
  isLowAttendance: boolean;
}

const ATTENDANCE_THRESHOLD = 75;

const studentSummary = computed<StudentSummary[]>(() => {
  if (!course.value) {
    return [];
  }

  const totalSessions = checkIns.value.length;
  const summaryMap = new Map<string, StudentSummary>();

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

  checkIns.value.forEach((checkIn) => {
    checkIn.studentEmails.forEach((email) => {
      const normalizedEmail = email.toLowerCase();
      const summary = summaryMap.get(normalizedEmail);
      if (summary) {
        summary.attended += 1;
      }
    });
  });

  const summaries = Array.from(summaryMap.values()).map((summary) => {
    summary.attendanceRate = totalSessions > 0 ? (summary.attended / summary.total) * 100 : 0;
    summary.isLowAttendance = summary.attendanceRate < ATTENDANCE_THRESHOLD;
    return summary;
  });

  return summaries.sort((a, b) => a.attendanceRate - b.attendanceRate);
});

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;

    const fetchedCourse = await getCourse(courseId.value);
    if (!fetchedCourse) {
      error.value = "Course not found";
      return;
    }
    course.value = fetchedCourse;

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
  min-height: calc(100vh - 60px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: transparent; /* Remove the gradient, let body show through */
}

.header {
  margin-bottom: 2rem;
}

.back-btn {
  background: var(--gvsu-blue);
  color: #fff;
  border: 1px solid var(--gvsu-blue);
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
  margin-bottom: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  background: #0040c4;
  transform: translateX(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.course-info-header h1 {
  margin: 0.5rem 0;
  font-size: 2rem;
  color: #f9fafb;
}

.course-details {
  color: #cbd5e1;
  margin: 0;
  font-size: 1.1rem;
}

/* Loading */
.loading {
  text-align: center;
  padding: 4rem 2rem;
  color: #e5e7eb;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid var(--link-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Error */
.error-message {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  color: #dc2626;
  border: 1px solid #fecaca;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: var(--gvsu-blue);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: #0040c4;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

/* Content Sections */
.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 50, 160, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

section:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

section h2 {
  margin: 0 0 1.25rem 0;
  font-size: 1.5rem;
  color: var(--gvsu-blue);
  font-weight: 700;
  border-bottom: 2px solid var(--gvsu-blue);
  padding-bottom: 0.75rem;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
}

.no-data .hint {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #9ca3af;
}

/* Summary Table */
.table-container {
  overflow-x: auto;
  border-radius: 8px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  background: #f9fafb;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.summary-table thead {
  background: var(--gvsu-blue);
}

.summary-table th {
  padding: 0.85rem 1rem;
  text-align: left;
  font-weight: 600;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.summary-table td {
  padding: 0.85rem 1rem;
  border-top: 1px solid #e5e7eb;
  color: #374151;
}

.summary-table tr.low-attendance {
  background: #fef2f2;
}

.summary-table tbody tr:hover {
  background: #f3f4f6;
}

.summary-table .email {
  color: #6b7280;
  font-size: 0.9rem;
}

.summary-table .centered {
  text-align: center;
}

.percentage {
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #bbf7d0;
  display: inline-block;
}

.percentage.low {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.status-badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge.good {
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #bbf7d0;
}

.status-badge.warning {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

/* Records List */
.records-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.record-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s;
}

.record-card:hover {
  border-color: var(--gvsu-blue);
  box-shadow: 0 2px 8px rgba(0, 50, 160, 0.15);
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.record-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #111827;
}

.passcode-badge {
  background: #eef2ff;
  color: #3730a3;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  border: 1px solid #c7d2fe;
}

.record-details {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.record-time {
  color: #6b7280;
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.record-time strong {
  color: #374151;
}

.separator {
  margin: 0 0.5rem;
  color: #9ca3af;
}

.attendance-count {
  margin: 0.5rem 0 0 0;
  color: #374151;
  font-size: 0.95rem;
}

.attendance-count strong {
  color: var(--gvsu-blue);
  font-size: 1.1rem;
}

.students-list h4 {
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  color: #374151;
  font-weight: 600;
}

.students-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.5rem;
}

.students-list li {
  padding: 0.65rem 0.85rem;
  background: white;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid #e5e7eb;
  color: #374151;
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
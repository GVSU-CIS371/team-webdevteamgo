<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { listenMyCourses, startCheckIn, endCheckIn, updateCourse, deleteCourse } from "../services/courseService";
import CourseEditModal from "./CourseEditModal.vue";
import CourseStudentsModal from "./CourseStudentsModal.vue";
import type { Course, Student } from "../types";
import { useAuth } from "../lib/useAuth";

const router = useRouter();

const { user, loading: authLoading } = useAuth();
const instructorId = computed(() => user.value?.uid || "");

const courses = ref<Course[]>([]);
const showEditModal = ref(false);
const editingCourse = ref<Course | null>(null);
const showStudentsModal = ref(false);
const studentsCourse = ref<Course | null>(null);
const copyStatus = ref<Record<string, "idle" | "copied" | "error">>({});

let off: (() => void) | null = null;

function resubscribe() {
  if (off) {
    off();
    off = null;
  }
  const uid = instructorId.value;
  if (!uid) {
    courses.value = [];
    return;
  }
  off = listenMyCourses(uid, (rows) => (courses.value = rows));
}

onMounted(() => {
  resubscribe();
});

watch(instructorId, () => {
  resubscribe();
});

onUnmounted(() => {
  if (off) off();
});

async function onStart(id: string) {
  await startCheckIn(id, 5);
}

async function onEnd(id: string) {
  await endCheckIn(id);
}

function onEdit(course: Course) {
  editingCourse.value = course;
  showEditModal.value = true;
}

function onManageStudents(course: Course) {
  studentsCourse.value = course;
  showStudentsModal.value = true;
}

function onViewAttendance(course: Course) {
  router.push({ name: "attendance-history", params: { courseId: course.id } });
}

function checkInLinkFor(course: Course): string {
  if (!course.activeCheckInRef?.id) return "";
  const resolved = router.resolve({
    name: "checkin",
    params: { id: course.activeCheckInRef.id },
  });
  return new URL(resolved.href, window.location.origin).toString();
}

async function onSave(updatedCourse: Course) {
  try {
    await updateCourse(updatedCourse.id, {
      name: updatedCourse.name,
      code: updatedCourse.code,
      semester: updatedCourse.semester,
    });
    console.log("Course updated successfully");
  } catch (error) {
    console.error("Error updating course:", error);
    alert("Failed to update course. Please try again.");
  }
}

async function onDelete(course: Course) {
  const confirmed = confirm(
    `Are you sure you want to delete "${course.name}"?\n\nThis action cannot be undone.`
  );

  if (confirmed) {
    try {
      await deleteCourse(course.id);
      console.log("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course. Please try again.");
    }
  }
}

async function onSaveStudents(students: Student[]) {
  if (!studentsCourse.value) return;
  try {
    await updateCourse(studentsCourse.value.id, { studentsList: students });
  } catch (error) {
    console.error("Error updating students:", error);
    alert("Failed to update students. Please try again.");
  }
}

async function onCopyLink(course: Course) {
  const link = checkInLinkFor(course);
  if (!link) return;
  try {
    await navigator.clipboard.writeText(link);
    copyStatus.value[course.id] = "copied";
    setTimeout(() => {
      if (copyStatus.value[course.id] === "copied") {
        copyStatus.value[course.id] = "idle";
      }
    }, 2000);
  } catch (error) {
    copyStatus.value[course.id] = "error";
    console.error("[courses] Failed to copy check-in link", error);
  }
}
</script>

<template>
  <div class="courses">
    <div v-if="authLoading" class="loading">Loading your courses…</div>
    <div v-else-if="!instructorId" class="signin-prompt">Please sign in to view your courses.</div>
    <div v-for="c in courses" :key="c.id" class="course">
      <div class="course-info">
        <h3>{{ c.name }} ({{ c.code }}) — {{ c.semester }}</h3>
        <p>Students: {{ c.studentsList.length }}</p>
      </div>
      <div class="course-header">
        <div class="course-actions">
          <button @click="onEdit(c)" class="btn btn-edit" title="Edit course">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </button>
          <button @click="onManageStudents(c)" class="btn btn-students" title="Manage students">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
            </svg>
            Students
          </button>
          <button @click="onViewAttendance(c)" class="btn btn-attendance" title="View attendance history">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            Attendance History
          </button>
          <button @click="onDelete(c)" class="btn btn-delete" title="Delete course">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Delete
          </button>
        </div>
      </div>

      <div v-if="c.activeCheckIn" class="active">
        <p><strong>✅ Active Check-In</strong></p>
        <p>Passcode: <code class="pswd">{{ c.activeCheckIn.passcode }}</code></p>
        <p>Ends: {{ c.activeCheckIn.expiresAt.toLocaleTimeString() }}</p>
        <button @click="onEnd(c.id)" class="btn btn-danger">End check-in</button>
        <div class="share-row">
          <div class="share-text">
            <p class="share-label">Check-in link</p>
            <p class="share-url">{{ checkInLinkFor(c) }}</p>
          </div>
          <div class="share-actions">
            <button @click="onCopyLink(c)" class="btn btn-copy">Copy link</button>
            <span
              v-if="copyStatus[c.id] === 'copied'"
              class="copy-note success"
            >
              Copied
            </span>
            <span
              v-else-if="copyStatus[c.id] === 'error'"
              class="copy-note error"
            >
              Copy failed
            </span>
          </div>
        </div>
      </div>
      <div v-else class="inactive">
        <p><em>No check-in running</em></p>
        <button @click="onStart(c.id)" class="btn btn-primary">Start check-in</button>
      </div>
    </div>
  </div>

  <CourseEditModal
    :course="editingCourse"
    v-model:show="showEditModal"
    @save="onSave"
  />

  <CourseStudentsModal
    :course="studentsCourse"
    v-model:show="showStudentsModal"
    @save="onSaveStudents"
  />
</template>

<style scoped>
.courses {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.loading,
.signin-prompt {
  color: #e5e7eb;
  text-align: center;
  padding: 2rem;
}

.course {
  border: 1px solid rgba(0, 50, 160, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.course:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.course-info {
  flex: 1;
}

.course-info h3 {
  margin: 0 0 0.5rem 0;
  color: #111827;
  font-size: 1.25rem;
}

.course-info p {
  margin: 0;
  color: #6b7280;
  padding-bottom: 1rem;
  font-size: 0.95rem;
}

.course-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
}

.course-actions .btn {
  width: 100%;
  justify-content: center;
}

/* === Unified Button System === */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Button variants */
.btn-edit {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}
.btn-edit:hover {
  background: #e5e7eb;
  color: #111827;
}

.btn-students {
  background: #eef2ff;
  color: #3730a3;
  border: 1px solid #c7d2fe;
}
.btn-students:hover {
  background: #e0e7ff;
  color: #312e81;
}

.btn-attendance {
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
}
.btn-attendance:hover {
  background: #dcfce7;
  color: #166534;
}

.btn-delete {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
.btn-delete:hover {
  background: #fecaca;
  color: #b91c1c;
}

.btn-primary {
  background: var(--gvsu-blue);
  color: white;
  border: 1px solid var(--gvsu-blue);
}
.btn-primary:hover {
  background: #0040c4;
}

.btn-danger {
  background: #dc2626;
  color: white;
  border: 1px solid #dc2626;
}
.btn-danger:hover {
  background: #b91c1c;
}
.btn-copy {
  background: #eef2ff;
  color: #1d4ed8;
  border: 1px solid #c7d2fe;
}
.btn-copy:hover {
  background: #e0e7ff;
  color: #1e3a8a;
}

/* Active & inactive states */
.active {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.active p {
  margin: 0.5rem 0;
  color: #166534;
}

.active strong {
  color: #15803d;
}

.inactive {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.inactive p {
  margin: 0 0 0.75rem 0;
  color: #6b7280;
}

.pswd {
  font-size: 1.1rem;
  font-weight: bold;
  background: #dcfce7;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #15803d;
}

.share-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1rem;
  padding: 0.75rem;
  border: 1px dashed #bbf7d0;
  border-radius: 8px;
  background: #ecfdf3;
}

.share-text {
  flex: 1;
  min-width: 240px;
}

.share-label {
  margin: 0 0 0.25rem 0;
  color: #065f46;
  font-weight: 600;
  font-size: 0.95rem;
}

.share-url {
  margin: 0;
  color: #064e3b;
  font-family: Menlo, Consolas, Monaco, "Courier New", monospace;
  font-size: 0.9rem;
  word-break: break-all;
}

.share-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.copy-note {
  font-size: 0.85rem;
}

.copy-note.success {
  color: #15803d;
}

.copy-note.error {
  color: #b91c1c;
}
</style>

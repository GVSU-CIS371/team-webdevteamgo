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
</style>
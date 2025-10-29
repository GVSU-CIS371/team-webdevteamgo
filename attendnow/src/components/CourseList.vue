<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { listenMyCourses, startCheckIn, endCheckIn, updateCourse, deleteCourse } from "../services/courseService";
import CourseEditModal from "./CourseEditModal.vue";
import type { Course } from "../types";

// TODO: replace this with your real Auth UID once you wire Firebase Auth
const instructorId = "tjuFeWwFszXemcH6LwNcBwHtnbW2";

const courses = ref<Course[]>([]);
const showEditModal = ref(false);
const editingCourse = ref<Course | null>(null);

let off: (() => void) | null = null;

onMounted(() => {
  off = listenMyCourses(instructorId, (rows) => (courses.value = rows));
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
</script>

<template>
  <div class="courses">
    <div v-for="c in courses" :key="c.id" class="course">
      <div class="course-header">
        <div class="course-info">
          <h3>{{ c.name }} ({{ c.code }}) — {{ c.semester }}</h3>
          <p>Students: {{ c.students.length }}</p>
        </div>
        <div class="course-actions">
          <button @click="onEdit(c)" class="edit-btn" title="Edit course">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </button>
          <button @click="onDelete(c)" class="delete-btn" title="Delete course">
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
        <button @click="onEnd(c.id)" class="danger">End check-in</button>
      </div>
      <div v-else class="inactive">
        <p><em>No check-in running</em></p>
        <button @click="onStart(c.id)" class="primary">Start check-in</button>
      </div>
    </div>
  </div>

  <CourseEditModal
    :course="editingCourse"
    v-model:show="showEditModal"
    @save="onSave"
  />
</template>

<style scoped>
.courses {
  max-width: 700px;
  width: 40%;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
  color: #222;
}

.course {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  background: #fff;
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
}

.course-info p {
  margin: 0;
  color: #666;
}

.course-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.edit-btn,
.delete-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.edit-btn {
  background: #f3f4f6;
  color: #374151;
}

.edit-btn:hover {
  background: #e5e7eb;
  color: #111827;
}

.delete-btn {
  background: #fee2e2;
  color: #dc2626;
}

.delete-btn:hover {
  background: #fecaca;
  color: #b91c1c;
}

.active {
  background: #e6ffed;
  padding: 0.5rem;
  border-radius: 4px;
}

.inactive {
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 4px;
}

button.primary,
button.danger {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.primary {
  background: #007bff;
  color: white;
}

button.primary:hover {
  background: #0056b3;
}

button.danger {
  background: #dc3545;
  color: white;
}

button.danger:hover {
  background: #c82333;
}

.pswd {
  font-size: 1rem;
  font-weight: bold;
}

@media (prefers-color-scheme: light) {
  .courses {
    color: #e5e7eb;
  }

  .course {
    background: #1f2937;
    border-color: #374151;
  }

  .course-info p {
    color: #9ca3af;
  }

  .edit-btn {
    background: #374151;
    color: #d1d5db;
  }

  .edit-btn:hover {
    background: #4b5563;
    color: #f9fafb;
  }

  .delete-btn {
    background: #7f1d1d;
    color: #fca5a5;
  }

  .delete-btn:hover {
    background: #991b1b;
    color: #fecaca;
  }

  .inactive {
    background: #374151;
  }
}
</style>
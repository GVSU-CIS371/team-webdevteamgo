<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Course } from '../types';

const props = defineProps<{
  course: Course | null;
  show: boolean;
}>();

const emit = defineEmits<{
  'update:show': [value: boolean];
  'save': [course: Course];
}>();

// Local form state
const formName = ref('');
const formCode = ref('');
const formSemester = ref('');

// Watch for course changes to populate form
watch(() => props.course, (newCourse) => {
  if (newCourse) {
    formName.value = newCourse.name;
    formCode.value = newCourse.code;
    formSemester.value = newCourse.semester;
  }
}, { immediate: true });

function handleSave() {
  if (!props.course) return;
  
  const updatedCourse: Course = {
    ...props.course,
    name: formName.value.trim(),
    code: formCode.value.trim(),
    semester: formSemester.value.trim(),
  };
  
  emit('save', updatedCourse);
  handleClose();
}

function handleClose() {
  emit('update:show', false);
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    handleClose();
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Edit Course</h2>
          <button class="close-btn" @click="handleClose" aria-label="Close">&times;</button>
        </div>
        
        <form @submit.prevent="handleSave" class="modal-body">
          <div class="form-group">
            <label for="courseName">Course Name</label>
            <input
              id="courseName"
              v-model="formName"
              type="text"
              required
              placeholder="e.g., Web Development"
              maxlength="100"
            />
          </div>

          <div class="form-group">
            <label for="courseCode">Course Code</label>
            <input
              id="courseCode"
              v-model="formCode"
              type="text"
              required
              placeholder="e.g., CIS371"
              maxlength="20"
            />
          </div>

          <div class="form-group">
            <label for="courseSemester">Semester</label>
            <input
              id="courseSemester"
              v-model="formSemester"
              type="text"
              required
              placeholder="e.g., Fall 2024"
              maxlength="50"
            />
          </div>

          <div class="modal-footer">
            <button type="button" @click="handleClose" class="btn-cancel">Cancel</button>
            <button type="submit" class="btn-save">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.form-group input {
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.modal-footer button {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #f3f4f6;
  color: #374151;
}

.btn-cancel:hover {
  background: #e5e7eb;
}

.btn-save {
  background: #3b82f6;
  color: white;
}

.btn-save:hover {
  background: #2563eb;
}

/* Transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

@media (prefers-color-scheme: dark) {
  .modal-content {
    background: #1f2937;
  }

  .modal-header {
    border-bottom-color: #374151;
  }

  .modal-header h2 {
    color: #f9fafb;
  }

  .close-btn {
    color: #9ca3af;
  }

  .close-btn:hover {
    background-color: #374151;
    color: #f9fafb;
  }

  .form-group label {
    color: #d1d5db;
  }

  .form-group input {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .form-group input:focus {
    border-color: #3b82f6;
  }

  .modal-footer {
    border-top-color: #374151;
  }

  .btn-cancel {
    background: #374151;
    color: #d1d5db;
  }

  .btn-cancel:hover {
    background: #4b5563;
  }
}
</style>
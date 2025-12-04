<script setup lang="ts">
import type { Student } from '@/types'
import { addCourse } from "../services/courseService";
import { useAuth } from '../lib/useAuth';
import { ref, computed } from "vue"
import router from '../router.ts';

const { user } = useAuth();
const instructorId = computed(() => user.value?.uid || "");
const stulist = ref<Student[]>([]);
const title = ref("")
const semester = ref("")
const code = ref("")
const name = ref("")
const email = ref("")

function addStudent() {
  if (!name.value || !email.value) return;

  stulist.value.push({
    name: name.value,
    email: email.value
  });

  // Clear inputs
  name.value = "";
  email.value = "";
}

function removeStudent(index: number) {
  if (index >= 0 && index < stulist.value.length) {
    stulist.value.splice(index, 1);
  }
}

async function createCourse() {
  if (!title.value || !code.value || !semester.value || !stulist.value || !instructorId.value) return;
  try {
    await addCourse({
      instructorId: instructorId.value,
      name: title.value,
      code: code.value,
      semester: semester.value,
      studentsList: stulist.value
    });
    console.log("Course added successfully");
  } catch (error) {
    console.error("Error adding course:", error);
    alert("Failed to add course. Please try again.");
  } finally {
    title.value = "";
    code.value = "";
    semester.value = "";
    stulist.value = []
    router.replace("/dashboard")
  }
}
</script>

<template>
  <main class="create">
    <div class="title">
      <h1 class="title">Create Course</h1>
      <router-link to="/dashboard" class="back-btn">← Back to Dashboard</router-link>
    </div>
    <section class="card">
      <div class="card-grid">
        <div class="course-details">
          <h2>Course details</h2>
          <label>
            <span>Course name</span>
            <input type="text" placeholder='Ex. "History 101"' v-model="title" />
          </label>
          <label>
            <span>Course code</span>
            <input type="text" placeholder='Ex. "HIS 101"' v-model="code" />
          </label>
          <label>
            <span>Semester</span>
            <input type="text" placeholder='Ex. "W25"' v-model="semester" />
          </label>
        </div>

        <div class="student-list-section">
          <h2>Students</h2>
          <div class="inline">
            <input class="student" type="text" placeholder="Full name" v-model="name" />
            <input class="student" type="email" placeholder="Email" v-model="email" />
            <button class="btn btn-primary" type="button" @click="addStudent">Add</button>
          </div>
          <ul class="student-list">
            <li v-for="(s, inx) in stulist" :key="inx" class="student-row">
              <div>
                <strong>{{ s.name }}</strong>
                <span class="muted">{{ s.email }}</span>
              </div>
              <button class="btn btn-delete" type="button" @click="removeStudent(inx)">Remove</button>
            </li>
            <li v-if="!stulist.length" class="empty">No students added yet.</li>
          </ul>
        </div>
      </div>

      <div class="actions">
        <button @click="createCourse" class="btn btn-primary">Create Course</button>
      </div>
    </section>
  </main>
  
</template>

<style scoped>
.create { 
  min-height: calc(100vh - 60px);
  max-width: 900px; 
  width: 100%; 
  margin: 0 auto; 
  padding: 2rem;
  background: transparent;
}
.course-details {
  margin-right: 1.5rem;
}
.student-list-section {
  margin-left: 1.5rem;
}
.title { 
  margin: 1rem 0 1.25rem; 
  color: #e5e7eb; 
  font-weight: 600; 
  letter-spacing: -0.3px;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title .btn {
  margin-left: auto;
}

.actions { 
  margin-top: 1.25rem; 
  display: flex; 
  justify-content: flex-end; 
}

.card { 
  background: white;
  border: 1px solid rgba(0, 50, 160, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  color: #111827;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-grid { 
  display: grid; 
  gap: 1.5rem; 
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

.card h2 { 
  margin: 0 0 .75rem; 
  font-size: 1.25rem; 
  color: #111827; 
}

.card label { 
  display: flex; 
  flex-direction: column; 
  gap: 0.35rem; 
  margin-bottom: 0.75rem; 
  font-weight: 600; 
  color: #111827; 
}

.card span { 
  font-weight: 600; 
  font-size: 0.95rem; 
}

.card input { 
  width: 100%; 
  padding: 0.65rem 1rem; 
  border-radius: 8px; 
  border: 1px solid #d1d5db; 
  background: #fff; 
  color: #111827; 
  font-size: 0.95rem; 
}

.card input:focus { 
  outline: none; 
  border-color: var(--gvsu-blue); 
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15); 
}

.inline { 
  display: grid; 
  grid-template-columns: 1fr 1fr auto; 
  gap: 3rem; 
  align-items: start; 
  margin-bottom: 0.75rem; 
}

.student { 
  margin: 1; 
  width: 100%; 
}

.student-list { 
  list-style: none; 
  padding: 0; 
  margin: 0.75rem 0 0; 
  display: flex; 
  flex-direction: column; 
  gap: 0.6rem; 
}

.student-row { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 0.9rem; 
  border: 1px solid #e5e7eb; 
  border-radius: 8px; 
  background: #f9fafb; 
}

.muted { 
  display: block; 
  color: #6b7280; 
  font-weight: 500; 
  font-size: 0.9rem; 
}

.empty { 
  color: #6b7280; 
  font-style: italic; 
  padding: 0.5rem 0; 
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

.back-btn {
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
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
  text-decoration: none;
}

.back-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #e5e7eb;
  color: #111827;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: var(--gvsu-blue);
  color: white;
  border: 1px solid var(--gvsu-blue);
}

.btn-primary:hover {
  background: #0040c4;
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
</style>
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
    <h1 class="title">Create Course</h1>
    <section class="card">
      <h2>Enter Course name</h2>
      <input type="text" placeholder="Ex. &quot;History 101&quot;" v-model="title"></input>
    </section>
    <section class="card">
      <h2>Enter Course Code</h2>
      <input type="text" placeholder="Ex. &quot;HIS 101&quot;" v-model="code"></input>
    </section>
    <section class="card">
      <h2>Enter Course semester</h2>
      <input type="text" placeholder="Ex. &quot;W25&quot;" v-model="semester"></input>
    </section>
    <section class="card">
      <h2>Enter Students</h2>
      <button @click="addStudent()">Add</button>
      <input class="student" type="text" placeholder="Full Name" v-model="name"></input>
      <input class="student" type="text" placeholder="Email" v-model="email"></input>
      <div v-for="(s, inx) in stulist" :key="inx">
          <button @click="removeStudent(inx)">Remove</button>
          <span> Name: {{ s.name }}, Email: {{ s.email }}</span>
      </div>
    </section>
    <button @click="createCourse" class="btn">Create Course</button>
  </main>
  
</template>

<style scoped>
.create { max-width: 960px; margin: 0 auto; padding: 1rem 1rem 2rem; }
.title { margin: 1rem 0; color: #e5e7eb; font-weight: 600; }
.student { margin: 1rem;}
@media (prefers-color-scheme: dark) {
  .title { color: #e5e7eb; }
}
.card { color:#e5e7eb; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:1rem; margin: 1rem 0; }
.card h2 { margin: 0 0 .5rem; font-size:1.15rem; color:#fff; }
.card ul, .card ol { margin:.25rem 0 0 .95rem; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
}
</style>

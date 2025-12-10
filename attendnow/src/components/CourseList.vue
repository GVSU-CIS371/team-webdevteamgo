<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { listenMyCourses, startCheckIn, endCheckIn } from "../services/courseService";
import type { Course } from "../types";

// TODO: replace this with your real Auth UID once you wire Firebase Auth
const instructorId = "tjuFeWwFszXemcH6LwNcBwHtnbW2";

const courses = ref<Course[]>([]);
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
</script>

<template>
  <div class="courses">
    <h2 style="color: black; top: 0">Courses</h2>

    <div v-for="c in courses" :key="c.id" class="course">
      <h3>{{ c.name }} ({{ c.code }}) — {{ c.semester }}</h3>
      <p>Students: {{ c.students.length }}</p>

      <div v-if="c.activeCheckIn" class="active">
        <p><strong>✅ Active Check-In</strong></p>
        <p>Passcode: <code>{{ c.activeCheckIn.passcode }}</code></p>
        <p>Ends: {{ c.activeCheckIn.expiresAt.toLocaleTimeString() }}</p>
        <button @click="onEnd(c.id)" class="danger">End check-in</button>
      </div>

      <div v-else class="inactive">
        <p><em>No check-in running</em></p>
        <button @click="onStart(c.id)" class="primary">Start check-in</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.courses {
  max-width: 700px;
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

.active {
  background: #e6ffed; /* light green */
  padding: 0.5rem;
  border-radius: 4px;
}

.inactive {
  background: #f5f5f5; /* light gray */
  padding: 0.5rem;
  border-radius: 4px;
}

button {
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

button.danger {
  background: #dc3545;
  color: white;
}
</style>

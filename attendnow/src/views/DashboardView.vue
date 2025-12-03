<script setup lang="ts">
import CourseList from "../components/CourseList.vue";
</script>

<template>
  <main class="dashboard">
    <div class="title">
      <h1>Course Dashboard</h1>
      <RouterLink to="/create" class="btn">Create Course →</RouterLink>
    </div>
    <CourseList />
  </main>
</template>

<style scoped>
.dashboard { 
  min-height: calc(100vh - 60px);
  min-width: 1280px; 
  max-width: 1480px; 
  width: 100%; 
  margin: 0 auto; 
  padding: 2rem;
  background: transparent; /* Remove the gradient, let body show through */
}
.title { 
  margin: 1rem 0; 
  color: #e5e7eb; 
  font-weight: 600; 
}
.btn { display:inline-block; min-width: 125px; max-height: 27px; margin-top: 1rem; margin-bottom: 1rem; color:#0b0d10; background:#8ab4ff; text-decoration:none; padding:.5rem .8rem; border-radius:8px; font-weight:600; }
.btn:hover { filter: brightness(1.05); }
</style>

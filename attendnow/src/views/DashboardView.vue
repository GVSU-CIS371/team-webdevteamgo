<script setup lang="ts">
import CourseList from "../components/CourseList.vue";
</script>

<template>
  <main class="dashboard">
    <div>
      <h1 class="title">Course Dashboard</h1>
      <RouterLink to="/create" class="btn">Create Course</RouterLink>
    </div>
    <CourseList />
  </main>
  
</template>

<style scoped>
.dashboard { min-width: 1280px; max-width: 1480px; width: 100%; margin: 0 auto; padding: 1rem; }
.title { margin: 1rem 0; color: #e5e7eb; font-weight: 600; }
@media (prefers-color-scheme: dark) {
  .title { color: #e5e7eb; }
}
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

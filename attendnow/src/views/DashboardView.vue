<script setup lang="ts">
import CourseList from "../components/CourseList.vue";
</script>

<template>
  <main class="dashboard">
    <h1 class="title">Course Dashboard</h1>
    <CourseList />
  </main>
  
</template>

<style scoped>
.dashboard { min-width: 1280px; max-width: 1480px; width: 100%; margin: 0 auto; padding: 1rem; }
.title { margin: 1rem 0; color: #e5e7eb; font-weight: 600; }
@media (prefers-color-scheme: dark) {
  .title { color: #e5e7eb; }
}
</style>

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
.dashboard { min-width: 0px; max-width: 1480px; width: 100%; margin: 0 auto }
.title {display: flex; flex-direction: row; justify-content: space-between; margin: 1rem;}
.title h1 { margin: 1rem 0; color: #e5e7eb; font-weight: 600; }
@media (prefers-color-scheme: dark) {
  .title h1 { color: #e5e7eb; }
}
.btn { display:inline-block; min-width: 125px; max-height: 27px; margin-top: 1rem; margin-bottom: 1rem; color:#0b0d10; background:#8ab4ff; text-decoration:none; padding:.5rem .8rem; border-radius:8px; font-weight:600; }
.btn:hover { filter: brightness(1.05); }
</style>

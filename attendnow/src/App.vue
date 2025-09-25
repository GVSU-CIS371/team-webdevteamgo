<template>
  <div class="app-container">
    <header class="app-header">
      <div class="logo-box">
        <img :src="logo" alt="AttendNow Logo" class="logo" />
      </div>
    </header>

    <CourseList />
  </div>
</template>

<script setup lang="ts">
import CourseList from "./components/CourseList.vue";
import logo from "./assets/logo.png";
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}

.app-header h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #222;
}

.logo-box {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo {
  width: 200px;
  height: auto;
}
</style>

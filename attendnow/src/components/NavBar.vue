<script setup lang="ts">
import { RouterLink } from "vue-router";
import logo from "../assets/logo.png";
import UserMenu from "./UserMenu.vue";

const emit = defineEmits<{ (e: 'open-auth', mode: 'signin' | 'signup'): void }>()
const forwardOpen = (mode: 'signin' | 'signup') => emit('open-auth', mode)
</script>

<template>
  <nav class="nav">
    <div class="left">
      <RouterLink to="/" aria-label="Home" class="brand">
        <!-- <img :src="logo" alt="AttendNow" class="logo" /> -->
        <span class="brand-text">AttendNow</span>
      </RouterLink>
    </div>
    <div class="center">
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/dashboard" class="link">Dashboard</RouterLink>
      <RouterLink to="/snapshot" class="link">Today's Snapshot</RouterLink>
      <RouterLink to="/studentCourseList" class="link">Student Courses</RouterLink>
    </div>
    <div class="right">
      <UserMenu @open-auth="forwardOpen" />
    </div>
  </nav>
</template>

<style scoped>
.nav { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; padding: 0.75rem 1rem; gap: 1rem; background: rgba(11,13,16,1); border-bottom: 2px solid rgba(240, 230, 230, 0.87); }
.left { display:flex; align-items:center; }
.brand { display:flex; align-items:center; gap:.5rem; text-decoration:none; }
.brand-text { color:#e5e7eb; font-weight:700; letter-spacing:.3px; }
.center { flex: 1; display:flex; align-items:center; justify-content:center; gap:.75rem; }
.right { display:flex; align-items:center; gap:.5rem; }
.logo { width: 40px; height: auto; display:block; }
.link { color:#e5e7eb; text-decoration:none; padding:.4rem .6rem; border-radius:6px; border-bottom:2px solid transparent; }
.link:hover { background: rgba(255,255,255,0.08); }
.link.router-link-exact-active { border-color:white; background: rgba(255,255,255,0.06); }
.ghost { background: transparent; color:#e5e7eb; border:1px solid rgba(255,255,255,0.2); padding:.4rem .6rem; border-radius:8px; cursor:pointer; }
.ghost:hover { background: rgba(255,255,255,0.06); }
.solid { background:#8ab4ff; color:#0b0d10; border:none; padding:.45rem .7rem; border-radius:8px; cursor:pointer; font-weight:600; }
.solid:hover { filter: brightness(1.05); }
</style>

<template>
  <div class="app-container">
    <NavBar @open-auth="onOpenAuth" />
    <RouterView />
    <AuthModal v-model:show="showAuth" :mode="authMode" />
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AuthModal from "./components/AuthModal.vue";

type Mode = 'signin' | 'signup'
const showAuth = ref(false)
const authMode = ref<Mode>('signin')
function onOpenAuth(mode: Mode) { authMode.value = mode; showAuth.value = true }
</script>

<style scoped>
.app-container { min-height: 100vh; display:flex; flex-direction:column; }
</style>

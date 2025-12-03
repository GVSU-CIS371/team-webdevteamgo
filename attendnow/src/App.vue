<template>
  <div class="app-container">
    <NavBar @open-auth="onOpenAuth" />
    <RouterView @open-auth="onOpenAuth" />
    <AuthModal v-model:show="showAuth" :mode="authMode" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AuthModal from "./components/AuthModal.vue";
import { useAuth } from "./lib/useAuth";

type Mode = 'signin' | 'signup'
const showAuth = ref(false)
const authMode = ref<Mode>('signin')
const route = useRoute()
const router = useRouter()
const { user } = useAuth()

function onOpenAuth(mode: Mode) { 
  authMode.value = mode
  showAuth.value = true 
}

// Watch for route query params to trigger auth dialog
watch(() => route.query.showAuth, (showAuthQuery) => {
  if (showAuthQuery === 'signup' || showAuthQuery === 'signin') {
    onOpenAuth(showAuthQuery as Mode)
  }
}, { immediate: true })

// After successful auth, redirect to intended page
watch([showAuth, user], ([isOpen, currentUser]) => {
  if (!isOpen && currentUser && route.query.redirect) {
    const redirect = route.query.redirect as string
    router.push(redirect)
  }
})
</script>

<style scoped>
.app-container { min-height: 100vh; display:flex; flex-direction:column; }
</style>

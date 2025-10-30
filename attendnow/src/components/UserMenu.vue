<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useAuth, signOut } from '../lib/useAuth'

const emit = defineEmits<{ (e: 'open-auth', mode: 'signin' | 'signup'): void }>()

const { user } = useAuth()
const open = ref(false)
const root = ref<HTMLElement | null>(null)

const initial = computed(() => {
  const u = user.value
  if (!u) return ''
  const name = (u.displayName || u.email || '').trim()
  return name ? name.charAt(0).toUpperCase() : ''
})

function toggle() { open.value = !open.value }
function close() { open.value = false }
function onSignIn() { emit('open-auth', 'signin') }
function onSignUp() { emit('open-auth', 'signup') }
async function onSignOut() { await signOut(); close() }

function handleClickOutside(e: MouseEvent) {
  if (!root.value) return
  if (!root.value.contains(e.target as Node)) close()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="user-menu" ref="root">
    <template v-if="user">
      <button class="avatar" @click="toggle" :aria-expanded="open">
        <span class="initial">{{ initial }}</span>
      </button>
      <div v-if="open" class="dropdown">
        <div class="info">
          <div class="name">{{ user?.displayName || 'Account' }}</div>
          <div class="email">{{ user?.email }}</div>
        </div>
        <button class="item" @click="onSignOut">Sign out</button>
      </div>
    </template>
    <template v-else>
      <button class="ghost" @click="onSignIn">Sign in</button>
      <button class="solid" @click="onSignUp">Sign up</button>
    </template>
  </div>
  
</template>

<style scoped>
.user-menu { position: relative; display: inline-flex; align-items: center; gap: .5rem; }
.avatar { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: #0b0d10; color:#e5e7eb; display:flex; align-items:center; justify-content:center; cursor:pointer; }
.initial { font-weight: 600; }
.dropdown { position: absolute; right: 0; top: calc(100% + 6px); min-width: 200px; background:#121418; border:1px solid rgba(255,255,255,0.12); border-radius:8px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); padding:.4rem; z-index: 50; }
.info { padding:.25rem .5rem .5rem; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:.25rem; }
.name { color:#e5e7eb; font-weight:600; font-size:.95rem; }
.email { color:#9ca3af; font-size:.85rem; }
.item { width:100%; text-align:left; background:transparent; border:none; color:#e5e7eb; padding:.45rem .5rem; border-radius:6px; cursor:pointer; }
.item:hover { background: rgba(255,255,255,0.06); }
.ghost { background: transparent; color:#e5e7eb; border:1px solid rgba(255,255,255,0.2); padding:.4rem .6rem; border-radius:8px; cursor:pointer; }
.ghost:hover { background: rgba(255,255,255,0.06); }
.solid { background:#8ab4ff; color:#0b0d10; border:none; padding:.45rem .7rem; border-radius:8px; cursor:pointer; font-weight:600; }
.solid:hover { filter: brightness(1.05); }
@media (prefers-color-scheme: light) {
  .dropdown { background: #fff; border-color:#d1d5db; }
  .avatar { background:#fff; color:#111; border-color:#d1d5db; }
  .ghost { color:#111; border-color:#d1d5db; }
  .ghost:hover { background:#f3f4f6; }
}
</style>


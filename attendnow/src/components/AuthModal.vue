<script setup lang="ts">
import { ref, watch, computed } from 'vue'

type Mode = 'signin' | 'signup'

const props = defineProps<{ show: boolean; mode: Mode }>()
const emit = defineEmits<{ (e: 'update:show', v: boolean): void }>()

const localShow = ref(props.show)
watch(() => props.show, v => (localShow.value = v))
watch(localShow, v => emit('update:show', v))

const isSignin = computed(() => props.mode === 'signin')

// demo state
const name = ref('')
const email = ref('')
const password = ref('')

function close() { localShow.value = false }

function submit() {
  // replace with real auth
  console.log(isSignin.value ? 'Sign in' : 'Sign up', { name: name.value, email: email.value })
  close()
}
</script>

<template>
  <teleport to="body">
    <div v-if="localShow" class="modal-backdrop" @click.self="close">
      <div class="modal">
        <header class="modal-header">
          <h3>{{ isSignin ? 'Sign in' : 'Sign up' }}</h3>
          <button class="icon" @click="close" aria-label="Close">✕</button>
        </header>
        <form class="form" @submit.prevent="submit">
          <label v-if="!isSignin">
            <span>Full name</span>
            <input v-model="name" type="text" placeholder="Ada Lovelace" required />
          </label>
          <label>
            <span>Email</span>
            <input v-model="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Password</span>
            <input v-model="password" type="password" placeholder="••••••••" required />
          </label>
          <button class="primary" type="submit">{{ isSignin ? 'Sign in' : 'Create account' }}</button>
        </form>
      </div>
    </div>
  </teleport>
  
</template>

<style scoped>
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display:flex; align-items:center; justify-content:center; z-index: 100; }
.modal { width: 100%; max-width: 420px; background: #121418; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
.modal-header { display:flex; align-items:center; justify-content:space-between; padding: .75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
.modal-header h3 { margin: 0; color:#e5e7eb; }
.icon { background:none; border:none; color:#e5e7eb; font-size: 1rem; cursor:pointer; }
.form { padding: 1rem; display:flex; flex-direction:column; gap:.75rem; }
label { display:flex; flex-direction:column; gap:.25rem; color:#e5e7eb; }
input { padding:.55rem .65rem; border-radius:8px; background:#0b0d10; border:1px solid rgba(255,255,255,0.12); color:#e5e7eb; }
.primary { margin-top:.25rem; padding:.6rem .8rem; border:none; border-radius:8px; background:#8ab4ff; color:#0b0d10; font-weight:600; cursor:pointer; }
.primary:hover { filter:brightness(1.05); }
</style>

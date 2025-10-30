<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Course, Student } from '../types'

const props = defineProps<{ course: Course | null; show: boolean }>()
const emit = defineEmits<{ 'update:show': [boolean]; 'save': [students: Student[]] }>()

const text = ref('')
const parseError = ref<string | null>(null)

watch(
  () => props.course,
  (c) => {
    if (!c) return
    // Convert existing list to name,email per line
    let list: Student[] = []
    const raw: any = (c as any).students_list
    if (Array.isArray(raw)) list = raw as Student[]
    else if (raw && typeof raw === 'object') list = Object.values(raw as Record<string, any>) as Student[]
    text.value = (list || [])
      .map((s) => `${(s?.name || '').trim()},${(s?.email || '').trim()}`.replace(/^,/, ''))
      .filter(Boolean)
      .join('\n')
    parseError.value = null
  },
  { immediate: true }
)

function close() { emit('update:show', false) }

function parseCSVToStudents(input: string): Student[] {
  const out: Student[] = []
  for (const line of input.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const parts = trimmed.split(',').map(p => p.trim()).filter(Boolean)
    let email = ''
    let name = ''
    if (parts.length === 1) {
      email = parts[0]
    } else if (parts.length >= 2) {
      const p0 = parts[0]
      const p1 = parts[1]
      if (p1.includes('@')) {
        name = p0
        email = p1
      } else if (p0.includes('@')) {
        email = p0
        name = p1
      } else {
        const emailIdx = parts.findIndex(p => p.includes('@'))
        if (emailIdx >= 0) {
          email = parts[emailIdx]
          name = parts[(emailIdx === 0 ? 1 : 0)] || ''
        }
      }
    }
    if (email && email.includes('@')) out.push({ email: email.toLowerCase(), name })
  }
  // dedupe by email
  const seen = new Set<string>()
  const dedup: Student[] = []
  for (const s of out) {
    if (seen.has(s.email)) continue
    seen.add(s.email)
    dedup.push(s)
  }
  return dedup
}

function onFileChange(e: Event) {
  const inputEl = e.target as HTMLInputElement
  const file = inputEl.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    try {
      const content = String(reader.result || '')
      const imported = parseCSVToStudents(content)
      const current = parseCSVToStudents(text.value)
      const byEmail = new Map(current.map(s => [s.email, s]))
      for (const s of imported) if (!byEmail.has(s.email)) byEmail.set(s.email, s)
      const merged = Array.from(byEmail.values())
      text.value = merged.map(s => `${s.name || ''},${s.email}`).join('\n')
      parseError.value = null
    } catch (err: any) {
      parseError.value = err?.message || 'Failed to parse CSV'
    }
  }
  reader.readAsText(file)
  inputEl.value = ''
}

function onSave() {
  try {
    const students = parseCSVToStudents(text.value)
    emit('save', students)
    close()
  } catch (err: any) {
    parseError.value = err?.message || 'Failed to parse list'
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-backdrop" @click.self="close">
      <div class="modal">
        <header class="modal-header">
          <h3>Manage Students</h3>
          <button class="icon" @click="close" aria-label="Close">✕</button>
        </header>

        <div class="body">
          <p class="hint">One per line: name,email (preferred). CSV import merges into this list. Duplicate emails are ignored.</p>

          <textarea v-model="text" rows="12" placeholder="Ada Lovelace,ada@gvsu.edu\nGrace Hopper,grace@gvsu.edu"></textarea>

          <div class="actions">
            <label class="import">
              <input type="file" accept=".csv,text/csv,text/plain" @change="onFileChange" hidden />
              <span>Import CSV</span>
            </label>
            <button class="ghost" type="button" @click="text = ''">Clear</button>
            <div class="spacer" />
            <button class="cancel" type="button" @click="close">Cancel</button>
            <button class="primary" type="button" @click="onSave">Save</button>
          </div>

          <p v-if="parseError" class="error">{{ parseError }}</p>
        </div>
      </div>
    </div>
  </Transition>
  
</template>

<style scoped>
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display:flex; align-items:center; justify-content:center; z-index: 100; }
.modal { width: 100%; max-width: 640px; background: #121418; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); overflow: hidden; }
.modal-header { display:flex; align-items:center; justify-content:space-between; padding: .75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
.modal-header h3 { margin: 0; color:#e5e7eb; }
.icon { background:none; border:none; color:#e5e7eb; font-size: 1rem; cursor:pointer; }
.body { padding: 1rem; display:flex; flex-direction:column; gap:.75rem; }
.hint { color:#9ca3af; margin:0 0 .25rem; }
textarea { resize: vertical; min-height: 220px; padding:.55rem .65rem; border-radius:8px; background:#0b0d10; border:1px solid rgba(255,255,255,0.12); color:#e5e7eb; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.actions { display:flex; align-items:center; gap:.5rem; margin-top:.25rem; }
.import { display:inline-flex; align-items:center; gap:.4rem; padding:.45rem .7rem; border-radius:8px; border:1px solid rgba(255,255,255,0.2); color:#e5e7eb; cursor:pointer; }
.ghost { background: transparent; color:#e5e7eb; border:1px solid rgba(255,255,255,0.2); padding:.45rem .7rem; border-radius:8px; cursor:pointer; }
.cancel { background: transparent; color:#e5e7eb; border:1px solid rgba(255,255,255,0.2); padding:.45rem .7rem; border-radius:8px; cursor:pointer; }
.primary { background:#8ab4ff; color:#0b0d10; border:none; padding:.5rem .8rem; border-radius:8px; cursor:pointer; font-weight:600; }
.primary:hover { filter: brightness(1.05); }
.spacer { flex:1 }
.error { color: #fda4af; }
@media (prefers-color-scheme: light) {
  .modal { background: #fff; }
  .modal-header h3 { color: #111; }
  textarea { background: #fff; color: #111; border-color: #d1d5db; }
}
</style>

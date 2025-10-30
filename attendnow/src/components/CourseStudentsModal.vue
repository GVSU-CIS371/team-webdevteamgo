<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Course, Student } from '../types'

const props = defineProps<{
  course: Course | null
  show: boolean
}>()

const emit = defineEmits<{
  'update:show': [boolean]
  'save': [students: Student[]]
}>()

const text = ref('')
const backupText = ref('') // ← new
const parseError = ref<string | null>(null)

watch(
  () => props.course,
  (c) => {
    if (!c) return
    let list: Student[] = []
    const raw: any = (c as any).students_list
    if (Array.isArray(raw)) list = raw
    else if (raw && typeof raw === 'object')
      list = Object.values(raw as Record<string, any>) as Student[]

    const formatted = (list || [])
      .map((s) => `${(s?.name ?? '').trim()},${(s?.email ?? '').trim()}`)
      .filter(Boolean)
      .join('\n')

    text.value = formatted
    backupText.value = formatted // ← store original
    parseError.value = null
  },
  { immediate: true }
)

function close() {
  text.value = backupText.value
  emit('update:show', false)
}

function parseCSVToStudents(input: string): Student[] {
  const out: Student[] = []
  for (const line of input.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const parts = trimmed.split(',').map((p) => p.trim()).filter(Boolean)
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
        const emailIdx = parts.findIndex((p) => p.includes('@'))
        if (emailIdx >= 0) {
          email = parts[emailIdx]
          name = parts[emailIdx === 0 ? 1 : 0] || ''
        }
      }
    }
    if (email && email.includes('@')) out.push({ email: email.toLowerCase(), name })
  }
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
      const byEmail = new Map(current.map((s) => [s.email, s]))
      for (const s of imported) if (!byEmail.has(s.email)) byEmail.set(s.email, s)
      const merged = Array.from(byEmail.values())
      text.value = merged.map((s) => `${s.name || ''},${s.email}`).join('\n')
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
      <div class="modal-content">
        <div class="modal-header">
          <h2>Manage Students</h2>
          <button class="close-btn" @click="close" aria-label="Close">&times;</button>
        </div>

        <form class="modal-body" @submit.prevent="onSave">
          <p class="hint">
            Enter one student per line as <strong>name,email</strong>. You can also import a CSV file; duplicate emails are ignored.
          </p>

          <textarea
            v-model="text"
            rows="12"
            placeholder="John Doe,john@example.com&#10;Jane Smith,jane@example.com"
          ></textarea>

          <p v-if="parseError" class="error">{{ parseError }}</p>

          <div class="modal-footer">
            <label class="btn-cancel import-label">
              <input type="file" accept=".csv,text/csv,text/plain" @change="onFileChange" hidden />
              Import CSV
            </label>
            <button type="button" class="btn-cancel" @click="text = ''">Clear</button>
            <button type="button" class="btn-cancel" @click="close">Cancel</button>
            <button type="submit" class="btn-save">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.modal-body {
  padding: 1.5rem;
}

.hint {
  color: #6b7280;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

textarea {
  width: 100%;
  resize: vertical;
  min-height: 220px;
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  box-sizing: border-box;
  color: #111827;
  background-color: #fff;
  transition: border-color 0.2s;
}

textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.error {
  color: #dc2626;
  margin-top: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.modal-footer button,
.import-label {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #f3f4f6;
  color: #374151;
}

.btn-cancel:hover {
  background: #e5e7eb;
}

.import-label {
  background: #f9fafb;
  color: #2563eb;
  border: 1px solid #d1d5db;
  cursor: pointer;
}

.import-label:hover {
  background: #eff6ff;
}

.btn-save {
  background: #3b82f6;
  color: white;
}

.btn-save:hover {
  background: #2563eb;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

@media (prefers-color-scheme: dark) {
  .modal-content {
    background: #1f2937;
  }

  .modal-header {
    border-bottom-color: #374151;
  }

  .modal-header h2 {
    color: #f9fafb;
  }

  .close-btn {
    color: #9ca3af;
  }

  .close-btn:hover {
    background-color: #374151;
    color: #f9fafb;
  }

  .hint {
    color: #9ca3af;
  }

  textarea {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  textarea:focus {
    border-color: #3b82f6;
  }

  .modal-footer {
    border-top-color: #374151;
  }

  .btn-cancel {
    background: #374151;
    color: #d1d5db;
  }

  .btn-cancel:hover {
    background: #4b5563;
  }

  .btn-save {
    background: #3b82f6;
    color: #fff;
  }

  .btn-save:hover {
    background: #2563eb;
  }
}
</style>

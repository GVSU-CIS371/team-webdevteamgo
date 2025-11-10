<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { collection, onSnapshot, type Unsubscribe } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course, Student } from "../types";

// Local helper to normalize students list from various legacy shapes
function toStudentsList(a: any): Student[] {
  if (!a) return [];
  if (Array.isArray(a)) {
    return a
      .filter(Boolean)
      .map((s: any) => ({ email: String(s.email || '').toLowerCase(), name: String(s.name || '') }))
      .filter((s: Student) => s.email.includes('@'));
  }
  if (typeof a === 'object') {
    return Object.values(a as Record<string, any>)
      .map((s: any) => ({ email: String(s.email || '').toLowerCase(), name: String(s.name || '') }))
      .filter((s: Student) => s.email.includes('@'));
  }
  if (typeof a === 'string') {
    const email = a.toLowerCase();
    return email.includes('@') ? [{ email, name: '' }] : [];
  }
  return [];
}

type DeptSummary = {
  dept: string;
  courseCount: number;
  totalStudents: number;
};

const courses = ref<Course[]>([]);
let off: Unsubscribe | null = null;

onMounted(() => {
  const col = collection(db, "courses");
  off = onSnapshot(
    col,
    (snap) => {
      courses.value = snap.docs.map((d) => {
        const data = d.data() as any;
        return {
          id: d.id,
          instructorId: String(data.instructorId || ""),
          name: String(data.name || ""),
          code: String(data.code || ""),
          semester: String(data.semester || ""),
          studentsList: data.studentsList
            ? toStudentsList(data.studentsList)
            : (data.students_list
                ? toStudentsList(data.students_list)
                : (Array.isArray(data.students) ? (data.students as string[]).map((e) => ({ email: String(e).toLowerCase(), name: '' })) : [])),
          activeCheckIn: null, // not needed for snapshot; omit transformation for now
        } as Course;
      });
    },
    (err) => {
      console.error("[snapshot] courses onSnapshot error:", err);
      courses.value = [];
    }
  );
});

onUnmounted(() => {
  if (off) off();
});

function extractDept(code: string): string {
  if (!code) return "UNK";
  const m = code.match(/[A-Za-z]{3}/);
  return (m ? m[0] : code.slice(0, 3)).toUpperCase();
}

const summaries = computed(() => {
  const map = new Map<string, DeptSummary>();
  for (const c of courses.value) {
    const dept = extractDept(c.code);
    const current = map.get(dept) || { dept, courseCount: 0, totalStudents: 0 };
    current.courseCount += 1;
    current.totalStudents += Array.isArray(c.studentsList) ? c.studentsList.length : 0;
    map.set(dept, current);
  }
  // sort by dept code for stable rendering
  return Array.from(map.values()).sort((a, b) => a.dept.localeCompare(b.dept));
});

function avgStudentsPerCourse(s: DeptSummary): string {
  if (!s.courseCount) return "0";
  return (s.totalStudents / s.courseCount).toFixed(1);
}
</script>

<template>
  <section class="snapshot">
    <h2 class="title">Course Snapshot</h2>

    <div v-if="summaries.length === 0" class="empty">No courses found.</div>

    <div v-else class="grid">
      <div v-for="s in summaries" :key="s.dept" class="card">
        <div class="card-header">
          <div class="dept">{{ s.dept }}</div>
        </div>
        <div class="metrics">
          <div class="metric">
            <div class="label">Courses</div>
            <div class="value">{{ s.courseCount }}</div>
          </div>
          <div class="metric">
            <div class="label">Avg Students</div>
            <div class="value">{{ avgStudentsPerCourse(s) }}</div>
          </div>
          <div class="metric">
            <div class="label">Avg Attendance</div>
            <div class="value placeholder">—</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.snapshot { max-width: 1000px; width: 100%; margin: 1rem auto; padding: 0 1rem; }
.title { margin: 0 0 1rem; color: #e5e7eb; font-weight: 600; }
.empty { color: #9ca3af; padding: 1rem; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
.dept { font-size: 1.1rem; font-weight: 700; color: #111827; letter-spacing: 0.5px; }

.metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
.metric { background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 8px; padding: 0.5rem; text-align: center; }
.label { font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem; }
.value { font-size: 1rem; font-weight: 600; color: #111827; }
.placeholder { color: #9ca3af; }

@media (prefers-color-scheme: dark) {
  .title { color: #e5e7eb; }
  .card { background: #1f2937; border-color: #374151; box-shadow: 0 2px 6px rgba(0,0,0,0.25); }
  .dept { color: #e5e7eb; }
  .metric { background: #111827; border-color: #1f2937; }
  .label { color: #9ca3af; }
  .value { color: #f3f4f6; }
  .empty { color: #9ca3af; }
}
</style>

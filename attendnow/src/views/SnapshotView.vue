<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { collection, onSnapshot, type Unsubscribe } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course, Student } from "../types";


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
.title { margin: 0 0 1rem; color: #e5e7eb; font-weight: 600; font-size: 1.5rem; }
.empty { color: #9ca3af; padding: 1rem; }

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.card {
  background: #0ECBF0; /* GVSU Link Blue */
  border: 2px solid #0ab8db;
  border-radius: 8px;
  padding: 0.75rem;
  box-shadow: 0 3px 6px rgba(14, 203, 240, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  width: 200px;
  flex-shrink: 0;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(14, 203, 240, 0.4);
}

.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; }
.dept { font-size: 0.95rem; font-weight: 700; color: #111827; letter-spacing: 0.5px; }

.metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.35rem; }
.metric { 
  background: rgba(255, 255, 255, 0.25); 
  border: 1px solid rgba(255, 255, 255, 0.3); 
  border-radius: 6px; 
  padding: 0.4rem 0.25rem; 
  text-align: center;
  backdrop-filter: blur(10px);
}
.label { font-size: 0.65rem; color: #111827; margin-bottom: 0.15rem; font-weight: 500; }
.value { font-size: 0.85rem; font-weight: 700; color: #111827; }
.placeholder { color: #374151; }
</style>
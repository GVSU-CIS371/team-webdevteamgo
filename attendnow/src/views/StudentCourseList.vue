<script setup lang="ts">
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref<any[]>([]);
const loading = ref(true);

// Fetch all courses (student view)
onMounted(async () => {
  const snap = await getDocs(collection(db, "courses"));
  courses.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  loading.value = false;
});

function goToCheckIn(courseId: string) {
  router.push(`/checkin/${courseId}`);
}
</script>

<template>
  <div class="courses">
    <h2>Available Courses</h2>

    <div v-if="loading">Loading courses…</div>

    <div v-for="c in courses" :key="c.id" class="course">
      <h3>{{ c.name }} ({{ c.code }}) — {{ c.semester }}</h3>

      <!-- Status -->
      <p v-if="c.activeCheckIn">
        <strong>Active Check-In</strong> 
      </p>
      <p v-else class="inactive">No active check-in</p>

      <!-- Button -->
      <button
        :disabled="!c.activeCheckIn"
        @click="goToCheckIn(c.id)"
        class="btn"
      >
        Check In
      </button>
    </div>
  </div>
</template>

<style scoped>
.courses { max-width: 700px; margin: 2rem auto; }
.course { background: #fff; padding: 1rem; border-radius: 6px; margin-bottom: 1rem; }
.inactive { color: #777; }
.btn {
  background: #007bff;
  color: white;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 6px;
}
.btn[disabled] {
  background: #999;
  cursor: not-allowed;
}
</style>

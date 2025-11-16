<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course } from "../types";

const router = useRouter();
const courses = ref<Course[]>([]);
const loading = ref(true);

onMounted(async () => {
  const snap = await getDocs(collection(db, "courses"));
  courses.value = snap.docs.map((d) => d.data() as Course);
  loading.value = false;
});

function goToCheckIn(course: Course) {
  if (!course.activeCheckIn) return;

  // Using embedded activeCheckIn for routing
  router.push({
    name: "student-check-in",
    params: { checkinId: course.activeCheckIn.id, courseId: course.id },
  });
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Available Courses</h1>

    <div v-if="loading">Loading...</div>

    <div v-else class="space-y-4">
      <div
        v-for="course in courses"
        :key="course.id"
        class="course"
      >
        <div>
          <p class="font-semibold">{{ course.name }}</p>
          <p class="text-gray-600">{{ course.code }} — {{ course.semester }}</p>
        </div>

        <button
          :disabled="!course.activeCheckIn"
          @click="goToCheckIn(course)"
          class="px-4 py-2 rounded text-white"
          :class="
            course.activeCheckIn
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          "
        >
          Check In
        </button>
      </div>
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

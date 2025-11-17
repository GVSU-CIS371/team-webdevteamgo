<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Course } from "@/types";

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
  router.push(`/checkin/${course.activeCheckInRef.id}`);
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Available Courses</h1>

    <div v-if="loading">Loading...</div>

    <div v-else class="courses space-y-4">
      <div
        v-for="course in courses"
        :key="course.id"
        class="course border p-4 rounded"
      >
        <div>
          <p class="course-header">{{ course.name }}</p>
          <p class="course-name">{{ course.code }} — {{ course.semester }}</p>
        </div>

        <button
          :disabled="!course.activeCheckIn"
          @click="goToCheckIn(course)"
          class="btn btn-primary mt-4"
          :class="course.activeCheckIn ? 'btn-primary' : 'inactive cursor-not-allowed'"
        >
          Check In
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.courses {
  max-width: 700px;
  width: 40%;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
  color: #222;
}

.course {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  background: #fff;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-weight: 700;
}

.course-info {
  flex: 1;
}

.course-info h3 {
  margin: 0 0 0.5rem 0;
}

.course-info p {
  margin: 0;
  color: #666;
  padding-bottom: 1rem;
}

.course-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
}

.course-actions .btn {
  width: 100%;
  justify-content: center;
}

/* === Unified Button System === */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
}

/* Button variants */
.btn-edit {
  background: #f3f4f6;
  color: #374151;
}
.btn-edit:hover {
  background: #e5e7eb;
  color: #111827;
}

.btn-students {
  background: #eef2ff;
  color: #3730a3;
}
.btn-students:hover {
  background: #e0e7ff;
  color: #312e81;
}

.btn-attendance {
  background: #f0fdf4;
  color: #15803d;
}
.btn-attendance:hover {
  background: #dcfce7;
  color: #166534;
}

.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}
.btn-delete:hover {
  background: #fecaca;
  color: #b91c1c;
}

.btn-primary {
  background: #007bff;
  color: white;
}
.btn-primary:hover {
  background: #0056b3;
}

.btn-danger {
  background: #dc3545;
  color: white;
}
.btn-danger:hover {
  background: #c82333;
}

/* Active & inactive states */
.active {
  background: #e6ffed;
  padding: 0.5rem;
  border-radius: 4px;
}

.inactive {
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 4px;
}

.pswd {
  font-size: 1rem;
  font-weight: bold;
}

/* Light theme adjustments */
@media (prefers-color-scheme: light) {
  .courses {
    color: #e5e7eb;
  }

  .course {
    background: #1f2937;
    border-color: #374151;
  }

  .course-info p {
    color: #9ca3af;
  }

  .btn {
    box-shadow: 0 2px 5px rgba(0,0,0,0.25);
  }

  .btn-edit {
    background: #374151;
    color: #d1d5db;
  }

  .btn-edit:hover {
    background: #4b5563;
    color: #f9fafb;
  }

  .btn-delete {
    background: #7f1d1d;
    color: #fca5a5;
  }

  .btn-delete:hover {
    background: #991b1b;
    color: #fecaca;
  }

  .btn-students {
    background: #312e81;
    color: #c7d2fe;
  }

  .btn-students:hover {
    background: #4338ca;
    color: #e0e7ff;
  }

  .btn-attendance {
    background: #14532d;
    color: #86efac;
  }

  .btn-attendance:hover {
    background: #166534;
    color: #bbf7d0;
  }

  .inactive {
    background: #374151;
  }
}

</style>
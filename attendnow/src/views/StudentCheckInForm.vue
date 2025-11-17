<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { CheckIn, Course, Student } from "@/types";

const route = useRoute();
const router = useRouter();

const course = ref<Course | null>(null);
const step = ref<"info" | "passcode">("info");

const studentName = ref("");
const studentEmail = ref("");
const passcode = ref("");

const loading = ref(true);
const error = ref("");

const checkinId = route.params.checkinId as string;
const checkIn = ref<CheckIn | null>(null);

onMounted(async () => {
  try {
    const snap = await getDoc(doc(db, "checkins", checkinId));

    if (!snap.exists()) {
      error.value = "Check-in not found.";
      return;
    }

    checkIn.value = snap.data() as CheckIn;

    const courseSnap = await getDoc(doc(db, "courses", checkIn.value?.courseId));
    if (courseSnap.exists()) {
      course.value = courseSnap.data() as Course;
    }
  } catch (e) {
    error.value = "Failed to load check-in.";
  } finally {
    loading.value = false;
  }
});

function proceedToPasscode() {
  const trimmedEmail = studentEmail.value.trim();
  const trimmedName = studentName.value.trim();

  const exists = course.value?.studentsList.some(
  s => s.email === trimmedEmail && s.name === trimmedName
  );

  if (exists) {
    step.value = "passcode";
    return;
  }

  if (!studentName.value || !studentEmail.value) {
    error.value = "Please enter both name and email.";
    return;
  }
  error.value = "You are not registered for this course.";
  
}

async function attemptCheckIn() {
  if (!course.value || !course.value.activeCheckIn) {
    error.value = "Check-in is no longer active.";
    return;
  }

  const expected = course.value.activeCheckIn.passcode.trim();
  if (passcode.value.trim() !== expected) {
    error.value = "Incorrect passcode.";
    return;
  }

  const student: Student = {
    name: studentName.value.trim(),
    email: studentEmail.value.trim(),
  };

  // 2. Add email to the checkin document's studentEmails
  const checkinRef = doc(db, "checkins", checkinId);
  
  await updateDoc(checkinRef, {
    studentEmails: arrayUnion(student.email),
  });
}
</script>

<template>
  <div class="p-6" align="center">
    <h1 class="text-xl font-bold mb-4">Check-In for {{ course?.name }}</h1>

    <div v-if="loading">Loading...</div>
    <p v-if="error" class="text-red-600 mb-4">{{ error }}</p>

    <div v-if="checkIn">

      <!-- Step 1: name/email -->
      <div v-if="step === 'info'" class="course space-y-4">
        <input
          v-model="studentName"
          placeholder="Your Name"
          class="border px-3 py-2 w-full rounded"
        />
        <input
          v-model="studentEmail"
          placeholder="Your Email"
          class="border px-3 py-2 w-full rounded"
        />

        <button
          class="px-4 py-2 bg-blue-600 text-white rounded"
          @click="proceedToPasscode"
        >
          Continue
        </button>
        <p>Expires in {{ checkIn?.expiresAt }}</p>
      </div>

      <!-- Step 2: passcode -->
      <div v-else-if="step === 'passcode'" class="space-y-4">
        <p>Enter the passcode for <b>{{ course?.name }}</b>:</p>

        <input
          v-model="passcode"
          placeholder="Passcode"
          class="border px-3 py-2 w-full rounded"
        />

        <button
          class="px-4 py-2 bg-green-600 text-white rounded"
          @click="attemptCheckIn"
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
  background: #403b3b7e;
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
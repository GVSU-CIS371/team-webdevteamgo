<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { CheckIn, Course, Student } from "@/types";

const route = useRoute();

const course = ref<Course | null>(null);
const step = ref<"info" | "passcode" | "completed">("info");

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
    checkIn.value = {
      ...snap.data(),
      expiresAt: snap.data().expiresAt.toDate(), // Convert Timestamp → Date
    } as CheckIn;
    
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

  const checkinRef = doc(db, "checkins", checkinId);
  const snap = await getDoc(checkinRef);

  if (!snap.exists()) {
    throw new Error("Check-in does not exist.");
  }

  // get array of existing emails
  const data = snap.data();
  const existingEmails = data.studentEmails || [];

  // If already checked in → return or show an error
  if (existingEmails.includes(student.email)) {
    error.value = "You are already checked in.";
    return;
  }
  
  // Add email to the checkin document's studentEmails
  await updateDoc(checkinRef, {
    studentEmails: arrayUnion(student.email),
  });
  step.value = "completed";
}
</script>

<template>
  <div class="p-6 page-container" align="center">
    <h1 class="form-title">Check-In for {{ course?.name }}</h1>

    <div v-if="loading">Loading...</div>
    
  </div>
  <div class="page-container" align="center">
    <div v-if="checkIn">

      <!-- Step 1: name/email -->
      <div v-if="step === 'info'" class="course-card space-y-4">
        <p v-if="error" class="error-text mb-4">{{ error }}</p>
        <input
          v-model="studentName"
          placeholder="Your Name"
          class="form-input"
        />
        <input
          v-model="studentEmail"
          placeholder="Your Email"
          class="form-input"
        />

        <button
          class="form-button blue-button"
          @click="proceedToPasscode"
        >
          Continue
        </button>

        <p class="info-text">
          Expires at: {{ checkIn?.expiresAt.toLocaleString() }}
        </p>
      </div>

      <!-- Step 2: passcode -->
      <div v-else-if="step === 'passcode'" class="course-card space-y-4">
        <p v-if="error" class="error-text mb-4">{{ error }}</p>

        <p class="info-text">
          Enter the passcode for <b>{{ course?.name }}</b>:
        </p>

        <input
          v-model="passcode"
          placeholder="Passcode"
          class="form-input"
        />

        <button
          class="form-button green-button"
          @click="attemptCheckIn"
        >
          Check In
        </button>
      </div>

      <!-- Completed -->
      <div v-else-if="step === 'completed'" class="course-card space-y-4">
        <p class="info-text">You have checked in. You may now leave the page.</p>
      </div>

    </div>
  </div>
  
</template>



<style scoped>
/* Layout */
.page-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 2rem;
}

/* Title */
.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  align-content: top;
  margin-right: 2rem;
  color: #ffffff;
}

/* Card container */
.course-card {
  width: 100%;
  max-width: 420px;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(250, 250, 255, 0.9);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

/* Inputs */
.form-input {
  width: 90%;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #111827;
  transition: all 0.2s ease;
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  outline: none;
}

/* Buttons */
.form-button {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.15s ease;
  color: white;
}

.form-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

.form-button:active {
  transform: translateY(0);
  filter: brightness(0.95);
}

/* Button colors */
.blue-button {
  background-color: #2563eb;
}

.blue-button:hover {
  background-color: #1e40af;
}

.green-button {
  background-color: #059669;
}

.green-button:hover {
  background-color: #047857;
}

/* Text styles */
.error-text {
  color: #dc2626;
}

.info-text {
  color: #374151;
}


</style>
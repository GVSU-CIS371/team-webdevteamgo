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
import type { ActiveCheckIn, Course, Student } from "@/types";

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
const checkIn = ref<ActiveCheckIn | null>(null);

onMounted(async () => {
  try {
    const snap = await getDoc(doc(db, "checkins", checkinId));

    if (!snap.exists()) {
      error.value = "Check-in not found.";
      return;
    }

    // You now have the check-in document
    checkIn.value = snap.data() as ActiveCheckIn;
  } catch (e) {
    error.value = "Failed to load check-in.";
  } finally {
    loading.value = false;
  }
});

function proceedToPasscode() {
  if (!studentName.value || !studentEmail.value) {
    error.value = "Please enter both name and email.";
    return;
  }

  step.value = "passcode";
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

  // 1. Add student to the course student list
  const courseRef = doc(db, "courses", course.value.id);
  await updateDoc(courseRef, {
    studentsList: arrayUnion(student),
  });

  // 2. Add email to the checkin document's studentEmails
  const checkinId = course.value.activeCheckIn.id;
  const checkinRef = doc(db, "checkins", checkinId);

  await updateDoc(checkinRef, {
    studentEmails: arrayUnion(student.email),
  });

  router.push("/thank-you");
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Course Check-In</h1>

    <div v-if="loading">Loading...</div>
    <p v-if="error" class="text-red-600 mb-4">{{ error }}</p>

    <div v-if="checkIn">

      <!-- Step 1: name/email -->
      <div v-if="step === 'info'" class="space-y-4">
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
      </div>

      <!-- Step 2: passcode -->
      <div v-else class="space-y-4">
        <p>Enter the passcode for <b>{{ course.name }}</b>:</p>

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

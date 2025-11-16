<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const route = useRoute();
const router = useRouter();

const courseId = route.params.courseId as string;
const course = ref<any>(null);
const loading = ref(true);

// Student input fields
const name = ref("");
const email = ref("");

// UI states
const studentValidated = ref(false);
const error = ref("");
const passcode = ref("");

// Load course
onMounted(async () => {
  const snap = await getDoc(doc(db, "courses", courseId));
  if (!snap.exists()) {
    error.value = "Course not found.";
  } else {
    course.value = snap.data();
  }
  loading.value = false;
});

// Step 1 — Validate student exists
function validateStudent() {
  error.value = "";

  if (!course.value) return;

  const student = course.value.studentsList?.find(
    (s: any) =>
      s.email.toLowerCase() === email.value.toLowerCase() &&
      s.name.toLowerCase() === name.value.toLowerCase()
  );

  if (!student) {
    error.value = "Student not found in this course.";
    return;
  }

  studentValidated.value = true;
}

// Step 2 — Verify passcode
function validatePasscode() {
  error.value = "";

  const active = course.value.activeCheckIn;
  if (!active) {
    error.value = "There is no active check-in for this course.";
    return;
  }

  if (passcode.value !== active.passcode) {
    error.value = "Incorrect passcode.";
    return;
  }

  // Success → route to confirmation page
  router.push(
    `/checkin/${courseId}/confirm?email=${encodeURIComponent(email.value)}`
  );
}
</script>

<template>
  <div v-if="loading">Loading…</div>

  <div v-else>
    <h2>Check In — {{ course?.name }}</h2>

    <form v-if="!studentValidated" @submit.prevent="validateStudent">
      <label>Name:</label>
      <input v-model="name" required />

      <label>Email:</label>
      <input v-model="email" type="email" required />

      <p v-if="error" style="color:red">{{ error }}</p>

      <button class="btn">Continue</button>
    </form>

    <form v-else @submit.prevent="validatePasscode">
      <p>Welcome, {{ name }}. Enter the passcode to complete your check-in.</p>

      <label>Passcode:</label>
      <input v-model="passcode" required />

      <p v-if="error" style="color:red">{{ error }}</p>

      <button class="btn">Check In</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 0.5rem;
}
.btn {
  background: #007bff;
  color: white;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 6px;
}
</style>

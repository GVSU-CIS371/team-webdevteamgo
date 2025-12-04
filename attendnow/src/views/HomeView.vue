<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useAuth } from "../lib/useAuth";

const { user } = useAuth();
const route = useRoute();
const router = useRouter();
const showGate = ref(false);

// Emit event to parent
const emit = defineEmits<{ (e: 'open-auth', mode: 'signin' | 'signup'): void }>();

watch(
  () => route.query.dashboardGate,
  (val) => {
    showGate.value = val === '1' || val === 'true' || val === 'true'.toString();
  },
  { immediate: true }
);

function handleDashboardClick(event: Event) {
  if (!user.value) {
    event.preventDefault();
    showGate.value = true;
    const nextQuery = { ...route.query, dashboardGate: '1', redirect: '/dashboard' };
    router.replace({ name: 'home', query: nextQuery }).catch(() => {});
  }
}

function openAuth(mode: 'signin' | 'signup') {
  emit('open-auth', mode);
  showGate.value = false;
}

function closeGate() {
  showGate.value = false;
  const { dashboardGate, ...rest } = route.query;
  router.replace({ query: rest }).catch(() => {});
}
</script>

<template>
  <main class="home">
    <section class="hero">
      <h1>AttendNow</h1>
      <p class="tag">Fast, reliable attendance and check-ins for courses.</p>
      <RouterLink 
        class="cta" 
        :to="{ name: 'dashboard' }"
        @click="handleDashboardClick"
      >
        Go to Dashboard →
      </RouterLink>
    </section>

    <section class="card">
      <h2>What It Does</h2>
      <ul>
        <li>Start a time-limited check-in for a class.</li>
        <li>Display a QR and passcode for students in the room.</li>
        <li>Track active status and end the check-in when time is up.</li>
      </ul>
    </section>

    <section class="card">
      <h2>How It Works</h2>
      <ol>
        <li>Instructor opens the Dashboard and clicks "Start check-in".</li>
        <li>A short passcode is generated and shown to students (QR coming soon).</li>
        <li>Students scan or enter the code to mark attendance.</li>
      </ol>
    </section>

    <section class="card">
      <h2>Data Model</h2>
      <p><strong>instructors</strong>: { instructorId, name, email }</p>
      <p><strong>courses</strong>: { name, code, semester, studentsList: [{ email, name }], instructorId, activeCheckInRef, activeCheckIn }</p>
      <p><strong>checkins</strong>: { id, courseId, instructorId?, passcode, startedAt, expiresAt, endedAt, studentEmails: string[] }</p>
      <p><strong>activeCheckIn</strong> (on course): null or { id, passcode, startedAt, expiresAt, qrUrl? } for UI convenience</p>
    </section>

    <section class="card">
      <h2>Roadmap</h2>
      <ul>
        <li>Student check-in page and history (checkins collection).</li>
        <li>Named sessions per class meeting.</li>
        <li>Firebase Auth-based roles and access control.</li>
        <li>QR generation and optional location validation.</li>
      </ul>
    </section>
  </main>

  <div v-if="showGate" class="gate-backdrop" @click.self="closeGate">
    <div class="gate-card">
      <header class="gate-header">
        <h3>Dashboard access</h3>
        <button class="gate-close" @click="closeGate" aria-label="Close">×</button>
      </header>
      <div class="gate-body">
        <p class="gate-eyebrow">Sign in required</p>
        <p class="gate-copy">
          You need an account to open the dashboard. Sign in or create one, and we’ll send you right back.
        </p>
        <div class="gate-actions">
          <button class="gate-btn secondary" @click="openAuth('signin')">Sign in</button>
          <button class="gate-btn primary" @click="openAuth('signup')">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home { 
  max-width: 960px; 
  margin: 0 auto; 
  padding: 2rem 1rem; 
  min-height: calc(100vh - 60px);
}

.hero { 
  padding: 3rem 0 2rem; 
  text-align: center;
}

.hero h1 { 
  margin: 0; 
  font-size: 3rem; 
  color: #e5e7eb;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.hero .tag { 
  margin-top: 0.75rem; 
  color: #cbd5e1; 
  font-size: 1.25rem;
}

.cta { 
  display: inline-block; 
  margin-top: 1.5rem; 
  color: white; 
  background: var(--gvsu-blue); 
  text-decoration: none; 
  padding: 0.75rem 1.5rem; 
  border-radius: 8px; 
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta:hover { 
  background: #0040c4;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.card { 
  background: white;
  border: 1px solid rgba(0, 50, 160, 0.1);
  border-radius: 12px; 
  padding: 1.5rem; 
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 { 
  margin: 0 0 1rem; 
  font-size: 1.5rem; 
  color: var(--gvsu-blue);
  font-weight: 700;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--gvsu-blue);
}

.card ul, .card ol { 
  margin: 0.5rem 0 0 1.5rem; 
  color: #374151;
  line-height: 1.7;
}

.card li {
  margin-bottom: 0.5rem;
}

.card p { 
  margin: 0.75rem 0; 
  color: #4b5563;
  line-height: 1.6;
}

.card p strong {
  color: #111827;
  font-weight: 600;
}

.gate-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  z-index: 2000;
}

.gate-card {
  width: 100%;
  max-width: 420px;
  background: #121418;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
}

.gate-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.gate-header h3 {
  margin: 0;
  color: #e5e7eb;
}

.gate-close {
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 1.25rem;
  cursor: pointer;
}

.gate-body {
  padding: 1rem;
}

.gate-eyebrow {
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  color: #93c5fd;
}

.gate-copy {
  margin: 0 0 1rem 0;
  color: #cbd5e1;
  line-height: 1.6;
}

.gate-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.gate-btn {
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gate-btn.primary {
  background: #0ECBF0;
  color: #111827;
  box-shadow: 0 4px 8px rgba(14, 203, 240, 0.3);
}

.gate-btn.primary:hover {
  background: #0ab8db;
  transform: translateY(-1px);
}

.gate-btn.secondary {
  background: #0b0d10;
  color: #e5e7eb;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.gate-btn.secondary:hover {
  border-color: #0ECBF0;
  box-shadow: 0 0 0 2px rgba(14, 203, 240, 0.2);
}
</style>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home">
    <section class="hero">
      <h1>AttendNow</h1>
      <p class="tag">Fast, reliable attendance and check-ins for courses.</p>
      <RouterLink class="cta" to="/dashboard">Go to Dashboard →</RouterLink>
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
        <li>Instructor opens the Dashboard and clicks “Start check-in”.</li>
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
</template>

<style scoped>
.home { max-width: 960px; margin: 0 auto; padding: 1rem 1rem 2rem; }
.hero { padding: 2rem 0 1rem; }
.hero h1 { margin: 0; font-size: 2.2rem; color: #e5e7eb; }
.hero .tag { margin-top: .25rem; color: #cbd5e1; }
.cta { display:inline-block; margin-top: .75rem; color:#0b0d10; background:#8ab4ff; text-decoration:none; padding:.5rem .8rem; border-radius:8px; font-weight:600; }
.cta:hover { filter: brightness(1.05); }
.card { color:#e5e7eb; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:1rem; margin: 1rem 0; }
.card h2 { margin: 0 0 .5rem; font-size:1.15rem; color:#fff; }
.card ul, .card ol { margin:.25rem 0 0 .95rem; }
</style>

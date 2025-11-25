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
</style>

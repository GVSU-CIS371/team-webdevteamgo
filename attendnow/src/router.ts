import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("./views/HomeView.vue") },
  { path: "/dashboard", name: "dashboard", component: () => import("./views/DashboardView.vue") },
  { path: "/snapshot", name: "snapshot", component: () => import("./views/SnapshotView.vue") },
  { path: "/course/:courseId/attendance", name: "attendance-history", component: () => import("./views/AttendanceHistoryView.vue") },
  { path: "/create", name: "create", component: () => import("./views/CreationView.vue") },
  { path: "/studentCourseList", name: "studentCourseList", component: () => import("./views/StudentCourseList.vue") },
  { path: "/checkins/:checkinId", name: "studentCheckInForm", component: () => import("./views/StudentCheckInForm.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

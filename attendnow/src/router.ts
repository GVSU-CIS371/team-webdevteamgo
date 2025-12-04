import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { useAuth } from "./lib/useAuth";

const routes: RouteRecordRaw[] = [
  { 
    path: "/", 
    name: "home", 
    component: () => import("./views/HomeView.vue"),
    meta: { requiresAuth: false }
  },
  { 
    path: "/checkin/:id",
    name: "checkin", 
    component: () => import("./views/StudentCheckInForm.vue"),
    meta: { requiresAuth: false }
  },
  { 
    path: "/dashboard",
    name: "dashboard", 
    component: () => import("./views/DashboardView.vue"),
    meta: { requiresAuth: true }
  },
  { 
    path: "/create",
    name: "create", 
    component: () => import("./views/CreationView.vue"),
    meta: { requiresAuth: true }
  },
  { 
    path: "/snapshot",
    name: "snapshot", 
    component: () => import("./views/SnapshotView.vue"),
    meta: { requiresAuth: true }
  },
  { 
    path: "/course/:courseId/attendance",
    name: "attendance-history",
    component: () => import("./views/AttendanceHistoryView.vue"),
    meta: { requiresAuth: true }
  }
];

export const router = createRouter({
  history: createWebHistory('/team-webdevteamgo/'),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

// Navigation guard
router.beforeEach((to, _from, next) => {
  const { user } = useAuth();

  if (to.meta.requiresAuth && !user.value) {
    next({
      name: 'home',
      query: { 
        redirect: to.fullPath,
        dashboardGate: '1'
      }
    });
  } else {
    next();
  }
});

export default router;

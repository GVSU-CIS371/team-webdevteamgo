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
    path: "/checkin/:id", // Make :id required (removed the ?)
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
  // Removed studentCourseList route
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const { user } = useAuth();
  const requiresAuth = to.meta.requiresAuth;
  
  if (requiresAuth && !user.value) {
    // User is not authenticated but route requires auth
    // Redirect to home and trigger signup dialog
    next({
      name: 'home',
      query: { 
        redirect: to.fullPath, 
        showAuth: 'signup' 
      }
    });
  } else {
    // User is authenticated or route doesn't require auth
    next();
  }
});

export default router;
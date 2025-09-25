import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (Optional) Analytics: only works in browsers with HTTPS and proper setup
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID, // optional
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const analyticsPromise = isSupported().then((ok) => (ok ? getAnalytics(app) : null));

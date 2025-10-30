import { ref } from "vue";
import { auth, db } from "./firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as fbSignOut,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const user = ref<User | null>(auth.currentUser);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

// Subscribe once at module load to keep user state in sync
onAuthStateChanged(auth, async (u) => {
  user.value = u;
  loading.value = false;
});

async function ensureInstructorProfile(u: User, name?: string) {
  try {
    const ref = doc(db, "instructors", u.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        uid: u.uid,
        name: name || u.displayName || "",
        email: u.email,
        role: "instructor",
        createdAt: serverTimestamp(),
      });
    }
  } catch (e) {
    // Non-fatal for app flow; keep silent to avoid blocking auth
    console.warn("[auth] ensureInstructorProfile warning:", e);
  }
}

export async function signIn(email: string, password: string) {
  error.value = null;
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred;
  } catch (e: any) {
    error.value = e?.message ?? "Failed to sign in";
    throw e;
  }
}

export async function signUp(name: string, email: string, password: string) {
  error.value = null;
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      try {
        await updateProfile(cred.user, { displayName: name });
      } catch (e) {
        console.warn("[auth] updateProfile warning:", e);
      }
    }
    await ensureInstructorProfile(cred.user, name);
    return cred;
  } catch (e: any) {
    error.value = e?.message ?? "Failed to sign up";
    throw e;
  }
}

export async function signOut() {
  error.value = null;
  await fbSignOut(auth);
}

export function useAuth() {
  return { user, loading, error, signIn, signUp, signOut };
}


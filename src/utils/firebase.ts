import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.replaceAll("'",'').trim(),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.replaceAll("'",'').trim(),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.replaceAll("'",'').trim(),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.replaceAll("'",'').trim(),
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.replaceAll("'",'').trim(),
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.replaceAll("'",'').trim(),
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
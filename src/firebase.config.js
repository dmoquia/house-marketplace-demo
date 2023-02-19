import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "house-demo-app.firebaseapp.com",
  projectId: "house-demo-app",
  storageBucket: "house-demo-app.appspot.com",
  messagingSenderId: "907394704990",
  appId: "1:907394704990:web:a7e56fcdb820dfd50d76cf",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

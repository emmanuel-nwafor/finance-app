// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAULQVv40WQCq_Z7CHR8JoMSHlCouRKbTw",
  authDomain: "finance-banking-app.firebaseapp.com",
  projectId: "finance-banking-app",
  storageBucket: "finance-banking-app.firebasestorage.app",
  messagingSenderId: "631788965438",
  appId: "1:631788965438:web:8cd52a927a3ca55e3ecb6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqlLkSDSRu0tSIsj7FKbx72vwbHfti00E",
  authDomain: "notekeeper-1804.firebaseapp.com",
  projectId: "notekeeper-1804",
  storageBucket: "notekeeper-1804.firebasestorage.app",
  messagingSenderId: "121867899029",
  appId: "1:121867899029:web:d83fa647920d89561bcb9c",
  measurementId: "G-J00CBX73F5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZs2UTnGSILIqQQNBEoD5fdfzBdweJmR4",
  authDomain: "companion-app-css.firebaseapp.com",
  projectId: "companion-app-css",
  storageBucket: "companion-app-css.firebasestorage.app",
  messagingSenderId: "917763792662",
  appId: "1:917763792662:web:789b550349b6b2d5e9fa37",
  measurementId: "G-WNTK71647D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addWaitlistEntry(name: string, email: string) {
  const docRef = await addDoc(collection(db, "waitlist"), {
    name,
    email,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

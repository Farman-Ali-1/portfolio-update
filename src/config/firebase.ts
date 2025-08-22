import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBZZfxC4F87hdN4F-aKoMO3z7qt2xOGQ_g",
  authDomain: "portfolio-aed4a.firebaseapp.com",
  projectId: "portfolio-aed4a",
  storageBucket: "portfolio-aed4a.firebasestorage.app",
  messagingSenderId: "930020615108",
  appId: "1:930020615108:web:9bb16d64985cc15376ba91",
  measurementId: "G-MEDV20LK2W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
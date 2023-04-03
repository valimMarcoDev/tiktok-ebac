import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
 
const firebaseConfig = {
  apiKey: "AIzaSyBkltXLDDfKIcx7ye0cywYm8wiKt1STq2M",
  authDomain: "tiktok---jornada-f57d0.firebaseapp.com",
  projectId: "tiktok---jornada-f57d0",
  storageBucket: "tiktok---jornada-f57d0.appspot.com",
  messagingSenderId: "828188636324",
  appId: "1:828188636324:web:122f75efc36c7cc6ee6231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
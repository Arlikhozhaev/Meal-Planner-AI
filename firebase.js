// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "meal-13c80.firebaseapp.com",
  projectId: "meal-13c80",
  storageBucket: "meal-13c80.appspot.com",
  messagingSenderId: "270343769442",
  appId: "1:270343769442:web:610776cfab579abdaf303b",
  measurementId: "G-F1FV1K86G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc , getDocs};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABU3SApbuWvB54dqMqxKiRaCdeI2nKeM0",
  authDomain: "mealplanner-ed198.firebaseapp.com",
  projectId: "mealplanner-ed198",
  storageBucket: "mealplanner-ed198.appspot.com",
  messagingSenderId: "540467102713",
  appId: "1:540467102713:web:5837f282c3344146a7b328",
  measurementId: "G-71PH6V60VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db}

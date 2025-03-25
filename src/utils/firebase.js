// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-yImCKZ5Ypv2ql0DxN2s-kK67Dm10yHI",
  authDomain: "nikreactportfolio.firebaseapp.com",
  projectId: "nikreactportfolio",
  storageBucket: "nikreactportfolio.firebasestorage.app",
  messagingSenderId: "587141147934",
  appId: "1:587141147934:web:975c80fdfaa5f75444ed0f",
  measurementId: "G-P7TKW9PJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
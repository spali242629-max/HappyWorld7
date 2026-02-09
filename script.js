// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNNHRlNPE1CxNd9kDX7kEU7eHb0n30VE",
  authDomain: "happy-world-25c08.firebaseapp.com",
  projectId: "happy-world-25c08",
  storageBucket: "happy-world-25c08.firebasestorage.app",
  messagingSenderId: "192294282796",
  appId: "1:192294282796:web:be56e12d63c6b1082d5389",
  measurementId: "G-L9V4MZ86ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

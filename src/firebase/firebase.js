// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDogO5dloAuckGgs1qbZaDOe1aApdbgkYc",
  authDomain: "hexaware-assignment.firebaseapp.com",
  projectId: "hexaware-assignment",
  storageBucket: "hexaware-assignment.appspot.com",
  messagingSenderId: "187168526077",
  appId: "1:187168526077:web:9bc1a9de60a9f63d66f894",
  measurementId: "G-241PP8GGQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}
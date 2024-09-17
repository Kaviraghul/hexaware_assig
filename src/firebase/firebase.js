// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBqejH92JsxWgnbk9SJ-m5UIztFZTO9Hk",
  authDomain: "react-projects-71d5a.firebaseapp.com",
  projectId: "react-projects-71d5a",
  storageBucket: "react-projects-71d5a.appspot.com",
  messagingSenderId: "1047302089151",
  appId: "1:1047302089151:web:a865bd294dfd8f36dfd90a",
  measurementId: "G-7NRWRC2QS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}
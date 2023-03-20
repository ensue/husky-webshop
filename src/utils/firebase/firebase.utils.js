import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWr1PRaNcIgsi1i2orkewTzulTJgEbRkc",
  authDomain: "husky-webshop.firebaseapp.com",
  projectId: "husky-webshop",
  storageBucket: "husky-webshop.appspot.com",
  messagingSenderId: "639056233874",
  appId: "1:639056233874:web:f61f0ed5aa357a9b6ced4b",
  measurementId: "G-WCVK2WK82Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
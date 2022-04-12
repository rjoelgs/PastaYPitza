// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjlXzCpNGln5XljM0R8R9aGeQXU1ketBQ",
  authDomain: "restaurant-u.firebaseapp.com",
  projectId: "restaurant-u",
  storageBucket: "restaurant-u.appspot.com",
  messagingSenderId: "977135802781",
  appId: "1:977135802781:web:9f0f4c52bc7571c5be7774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjpmWXBmZbWVKji2iyjoqOVdV-MwkNsTc",
  authDomain: "crazygrowshop-f097b.firebaseapp.com",
  projectId: "crazygrowshop-f097b",
  storageBucket: "crazygrowshop-f097b.appspot.com",
  messagingSenderId: "302230475879",
  appId: "1:302230475879:web:8e5182af28e2c3eb25b0c2",
  measurementId: "G-EKN7F53YGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
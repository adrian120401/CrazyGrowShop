// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDXJUFZDLVUFsRzVFt9Jq7XXvscMPjXdmc",
  authDomain: "crazygrowshop-413d8.firebaseapp.com",
  projectId: "crazygrowshop-413d8",
  storageBucket: "crazygrowshop-413d8.appspot.com",
  messagingSenderId: "727282120085",
  appId: "1:727282120085:web:ffa6a9bed0cc5fdb7bf29c",
  measurementId: "G-DFLKSZX4K9"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
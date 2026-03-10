// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfqOribXUyVlp5S3n0M0QvdMUq0v3xGFw",
  authDomain: "mini-blog-52b2b.firebaseapp.com",
  projectId: "mini-blog-52b2b",
  storageBucket: "mini-blog-52b2b.firebasestorage.app",
  messagingSenderId: "473156094461",
  appId: "1:473156094461:web:e58f30330fd76276337194"    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
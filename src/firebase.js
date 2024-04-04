// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAbPuliXMSUTiEjJBuOLzGzZtGGKg8oBGE",
  authDomain: "music-auth-9621.firebaseapp.com",
  projectId: "music-auth-9621",
  storageBucket: "music-auth-9621.appspot.com",
  messagingSenderId: "749781379154",
  appId: "1:749781379154:web:77a7afc106336ab6e2578b",
  measurementId: "G-DFZB9JVEBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
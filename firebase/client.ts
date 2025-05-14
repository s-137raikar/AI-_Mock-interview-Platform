// Import the functions you need from the SDKs you need
import { initializeApp , getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQcWH9CnBuK9UyM7dYaEnSGX6cTbqeTGI",
  authDomain: "prepwise-8c9a1.firebaseapp.com",
  projectId: "prepwise-8c9a1",
  storageBucket: "prepwise-8c9a1.firebasestorage.app",
  messagingSenderId: "15938132676",
  appId: "1:15938132676:web:40ba99265de291662d8791",
  measurementId: "G-XF5VJKDT3W"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCv7j36OiPHQp-rnJLuJJRz-21RcC_92zU",
    authDomain: "prepwise-e864a.firebaseapp.com",
    projectId: "prepwise-e864a",
    storageBucket: "prepwise-e864a.firebasestorage.app",
    messagingSenderId: "396481711836",
    appId: "1:396481711836:web:25fb97d94dde0fadbcae19",
    measurementId: "G-R4SF7J86PZ"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
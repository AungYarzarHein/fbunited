// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: "football-united-da3e2.firebaseapp.com",
  projectId: "football-united-da3e2",
  storageBucket: "football-united-da3e2.appspot.com",
  messagingSenderId: "252202990447",
  appId: "1:252202990447:web:e73f211cc08e17d0fb069a",
  measurementId: "G-X0LMSLJ281"
};


// console.log(process.env.FIREBASEAPIKEY)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
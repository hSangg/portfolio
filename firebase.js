// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ob4ICxm7uzyO-RfgD_VVyM5x_LrrvXk",
  authDomain: "portfolio-auth-f4751.firebaseapp.com",
  projectId: "portfolio-auth-f4751",
  storageBucket: "portfolio-auth-f4751.appspot.com",
  messagingSenderId: "786730093153",
  appId: "1:786730093153:web:5a3a803462a6b6d9ff3820",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

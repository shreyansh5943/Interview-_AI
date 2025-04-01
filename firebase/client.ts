import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDICe8vueW--v1_FxGfirLCvYEbezU4Nqg",
  authDomain: "interview-ai-128cb.firebaseapp.com",
  projectId: "interview-ai-128cb",
  storageBucket: "interview-ai-128cb.firebasestorage.app",
  messagingSenderId: "882564593890",
  appId: "1:882564593890:web:f7ce1bf9cd04adc25706bb",
  measurementId: "G-0SHZE4X0KH",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

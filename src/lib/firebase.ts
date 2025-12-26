
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2Zfx1Nkje1-WjYlNkhRyOHKLUfrGJlI0",
  authDomain: "portfolio-contact-f2b1c.firebaseapp.com",
  projectId: "portfolio-contact-f2b1c",
  storageBucket: "portfolio-contact-f2b1c.firebasestorage.app",
  messagingSenderId: "872033525258",
  appId: "1:872033525258:web:cb71051ad52168400989f3",
  measurementId: "G-HDB5W2CPNH"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
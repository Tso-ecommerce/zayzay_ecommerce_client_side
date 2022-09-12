// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGrX7im9sYNzFEj_KPQhNj2MT8FjpMbeI",
  authDomain: "tso-pj.firebaseapp.com",
  projectId: "tso-pj",
  storageBucket: "tso-pj.appspot.com",
  messagingSenderId: "488189885964",
  appId: "1:488189885964:web:209db6a3d47b4268907829",
  measurementId: "G-4LKSL2YMQS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
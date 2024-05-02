import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnqpO6vEo8WJtjjoUTm3-fQVMisbfPt-U",
  authDomain: "lab10-2c6cd.firebaseapp.com",
  projectId: "lab10-2c6cd",
  storageBucket: "lab10-2c6cd.appspot.com",
  messagingSenderId: "74184589438",
  appId: "1:74184589438:web:7c6ac7ee6e8bc9d2e2982f",
  measurementId: "G-NQP70WMEK1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

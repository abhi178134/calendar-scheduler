import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4m6BK8XsDBY0gC5ALZQrk3xzwP4OA55o",
  authDomain: "fir-auth-24b4a.firebaseapp.com",
  projectId: "fir-auth-24b4a",
  storageBucket: "fir-auth-24b4a.appspot.com",
  messagingSenderId: "197686217846",
  appId: "1:197686217846:web:d60cd50aa68a555a606357"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// const db = firebase.firestore();
// const storage = firebase.storage();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export  {app,db};
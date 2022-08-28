import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAqJB-U42pD_XssC-UrmU9ksaNXFDswcIY",
  authDomain: "monasmundial-d3c29.firebaseapp.com",
  projectId: "monasmundial-d3c29",
  storageBucket: "monasmundial-d3c29.appspot.com",
  messagingSenderId: "901983484723",
  appId: "1:901983484723:web:7cd6ff961d412d7e065c46",
  measurementId: "G-8QEMLCQNPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
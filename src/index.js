// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYnLa6fwn0Ntw0q8OrGP9pcx93UHxOkY",
  authDomain: "stem-enrg-database.firebaseapp.com",
  databaseURL: "https://stem-enrg-database-default-rtdb.firebaseio.com",
  projectId: "stem-enrg-database",
  storageBucket: "stem-enrg-database.appspot.com",
  messagingSenderId: "528151912924",
  appId: "1:528151912924:web:c143b9a6ec98284094ef19",
  measurementId: "G-Q36XMS7RYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
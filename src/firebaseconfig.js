// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuHNrWM0XAGbbku9IpjbgmTxEnbNuRquE",
  authDomain: "odc-crud-a0add.firebaseapp.com",
  projectId: "odc-crud-a0add",

  storageBucket: "odc-crud-a0add.appspot.com",
  messagingSenderId: "427534243572",
  appId: "1:427534243572:web:3592934e701a51904530a1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdGekH2Dd5qHwv8CSM73cSLnAdFN-lZhI",
  authDomain: "odc-crud-99478.firebaseapp.com",
  databaseURL:"https://odc-crud-99478-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "odc-crud-99478",
  storageBucket: "odc-crud-99478.appspot.com",
  messagingSenderId: "335913665111",
  appId: "1:335913665111:web:2a6376949da9c152139912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app
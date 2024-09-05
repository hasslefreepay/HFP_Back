// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxAOx3bgoWJjAS59kMS26EktmON86HyqA",
  authDomain: "haefreepay-b62ef.firebaseapp.com",
  projectId: "haefreepay-b62ef",
  storageBucket: "haefreepay-b62ef.appspot.com",
  messagingSenderId: "607270734902",
  appId: "1:607270734902:web:ff25147e85e7103e3bdc97",
  measurementId: "G-19WMEQR0RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
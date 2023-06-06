export * from './components';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSlvc06Z8iRbUR3eAE4mRX6lsBUKm0ZUg",
  authDomain: "bootstrap-grid-web-component.firebaseapp.com",
  projectId: "bootstrap-grid-web-component",
  storageBucket: "bootstrap-grid-web-component.appspot.com",
  messagingSenderId: "275126601017",
  appId: "1:275126601017:web:03d3ae31cb9b19d98254e8",
  measurementId: "G-TS0V7T4QVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

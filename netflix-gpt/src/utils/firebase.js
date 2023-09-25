// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsk8N5PMDO9elzJx-or2xe_Y0tMl5i3NU",
  authDomain: "netflixgpt-23b5c.firebaseapp.com",
  projectId: "netflixgpt-23b5c",
  storageBucket: "netflixgpt-23b5c.appspot.com",
  messagingSenderId: "423810507943",
  appId: "1:423810507943:web:8f04dbe7fa2c66a3952782",
  measurementId: "G-3FP3659VNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
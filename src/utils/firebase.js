// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKtIcDX-351NxaJNWcWqR1jqwxngRfVFU",
  authDomain: "netflixgpt-267f1.firebaseapp.com",
  projectId: "netflixgpt-267f1",
  storageBucket: "netflixgpt-267f1.appspot.com",
  messagingSenderId: "698289399635",
  appId: "1:698289399635:web:2c1eebaa107a294a7e23a6",
  measurementId: "G-FRJ619QK5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
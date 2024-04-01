// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4QlbdoavNSmUGI3ifOo7N3KNkSzQJmLY",
  authDomain: "rmh-netflixgpt.firebaseapp.com",
  projectId: "rmh-netflixgpt",
  storageBucket: "rmh-netflixgpt.appspot.com",
  messagingSenderId: "193700496627",
  appId: "1:193700496627:web:8021128ce74d24a8536386",
  measurementId: "G-LFEKZ0YCXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

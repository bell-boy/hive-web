// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1622N_38JxA4f9sWTB7_u5vPoaT_LuSw",
	authDomain: "hive-69054.firebaseapp.com",
	databaseURL: "https://hive-69054-default-rtdb.firebaseio.com",
	projectId: "hive-69054",
	storageBucket: "hive-69054.appspot.com",
	messagingSenderId: "897538154780",
	appId: "1:897538154780:web:2ac29fd07448a98301dad9",
	measurementId: "G-2ECK358WXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
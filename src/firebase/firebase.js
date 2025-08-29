// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYYtOjOOqWS2mKiFT3zFae0ja2mbyrXfw",
  authDomain: "lost-and-found-7b514.firebaseapp.com",
  projectId: "lost-and-found-7b514",
  storageBucket: "lost-and-found-7b514.appspot.com", // ✅ FIXED
  messagingSenderId: "263809674745",
  appId: "1:263809674745:web:ecbc3e7b81b39031b9a128",
  measurementId: "G-L73Z3XGM57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

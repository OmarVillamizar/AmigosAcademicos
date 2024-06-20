// js/script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbisuBBoTAsUcS9k7RvG_3sOF7tHk9D34",
    authDomain: "amigosacademicos-bf4ed.firebaseapp.com",
    projectId: "amigosacademicos-bf4ed",
    storageBucket: "amigosacademicos-bf4ed.appspot.com",
    messagingSenderId: "112868581776",
    appId: "1:112868581776:web:3cfed59b909fe5e4cf1315",
    measurementId: "G-DEYRTLVTQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };

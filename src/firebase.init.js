// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWnHJC8Ye4MUEyWJFHwrrAGwu02f9C47c",
    authDomain: "my-dental-care-f2f24.firebaseapp.com",
    projectId: "my-dental-care-f2f24",
    storageBucket: "my-dental-care-f2f24.appspot.com",
    messagingSenderId: "430687601420",
    appId: "1:430687601420:web:d30c0ef74f407c2fb03f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8BhPHWR8xd54b4SuNepIbbHZ-Hp7Wec",
  authDomain: "questionrush-37df5.firebaseapp.com",
  projectId: "questionrush-37df5",
  storageBucket: "questionrush-37df5.appspot.com",
  messagingSenderId: "9693627218",
  appId: "1:9693627218:web:75790dfec60a2740f9308b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
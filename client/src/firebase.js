// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blog-7dd97.firebaseapp.com",
  projectId: "my-blog-7dd97",
  storageBucket: "my-blog-7dd97.appspot.com",
  messagingSenderId: "431305593022",
  appId: "1:431305593022:web:76bad29c8c07db8a640eef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

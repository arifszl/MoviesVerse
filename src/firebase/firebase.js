// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9BYA8RAh6BVp6f6JVxLOjHhfOLzx2B50",
  authDomain: "moviesverse-2c376.firebaseapp.com",
  projectId: "moviesverse-2c376",
  storageBucket: "moviesverse-2c376.appspot.com",
  messagingSenderId: "29632981063",
  appId: "1:29632981063:web:0b16e0db5349d96449a962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);
 export const moviesRef=collection(db,'movies')
export default app;
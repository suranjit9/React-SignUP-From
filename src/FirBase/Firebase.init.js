// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBW_nx1KNzJSFDDBWD0yNx3FuB2qWo4ho",
  authDomain: "coinspix-5459f.firebaseapp.com",
  projectId: "coinspix-5459f",
  storageBucket: "coinspix-5459f.appspot.com",
  messagingSenderId: "350507042446",
  appId: "1:350507042446:web:d6093b1b8acae83555abdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

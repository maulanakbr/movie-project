// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhfUcOn8LN3TeYEdqF3OZLlw08HrMy8Y",
  authDomain: "movie-project-2022.firebaseapp.com",
  projectId: "movie-project-2022",
  storageBucket: "movie-project-2022.appspot.com",
  messagingSenderId: "413247313991",
  appId: "1:413247313991:web:aaa9e8469ec960fae4b962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP4-9wBd5HeVQvS3ONpVhjXWEmzE22LT4",
  authDomain: "disneyplus-hotstar-clone-d5cc8.firebaseapp.com",
  projectId: "disneyplus-hotstar-clone-d5cc8",
  storageBucket: "disneyplus-hotstar-clone-d5cc8.appspot.com",
  messagingSenderId: "670174969072",
  appId: "1:670174969072:web:870ef95173d1d4927f1635",
  measurementId: "G-VB8KQBLLGC"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {auth, provider, db} ;



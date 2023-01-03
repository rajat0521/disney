// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBJsDf3UIggazWgZQ9x_spWJoaobQR2jr0",
  authDomain: "disney-88e7d.firebaseapp.com",
  projectId: "disney-88e7d",
  storageBucket: "disney-88e7d.appspot.com",
  messagingSenderId: "295439782071",
  appId: "1:295439782071:web:da9177166863275e4e3d32",
  measurementId: "G-SN445HBSZ3"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const stortage = firebase.storage;


export { auth, provider, stortage };
export default db;

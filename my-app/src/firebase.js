// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxTBhSmkASaDbw8E5vltjKxEnC5Gj5A5g",
    authDomain: "git-nishant.firebaseapp.com",
    projectId: "git-nishant",
    storageBucket: "git-nishant.appspot.com",
    messagingSenderId: "301139845936",
    appId: "1:301139845936:web:2997ef0ce4e71e35991ef5",
    measurementId: "G-5GWQR7ECVH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
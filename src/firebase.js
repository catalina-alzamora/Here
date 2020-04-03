import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

//llave para poder acceder a firebase
const firebaseConfig = {
    apiKey: "AIzaSyB7b0r1Mh4fDg9tntTI1EK1SowFDmxYLGA",
    authDomain: "app-salud-aac97.firebaseapp.com",
    databaseURL: "https://app-salud-aac97.firebaseio.com",
    projectId: "app-salud-aac97",
    storageBucket: "app-salud-aac97.appspot.com",
    messagingSenderId: "39232680686",
    appId: "1:39232680686:web:e7166ff1c36835e28af9ff",
    measurementId: "G-ZCZNEQW7PR"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { db, firebase }

 
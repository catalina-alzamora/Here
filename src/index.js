import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
apiKey: "AIzaSyB7b0r1Mh4fDg9tntTI1EK1SowFDmxYLGA",
authDomain: "app-salud-aac97.firebaseapp.com",
databaseURL: "https://app-salud-aac97.firebaseio.com",
projectId: "app-salud-aac97",
storageBucket: "app-salud-aac97.appspot.com",
messagingSenderId: "39232680686",
appId: "1:39232680686:web:e7166ff1c36835e28af9ff",
measurementId: "G-ZCZNEQW7PR"
});

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

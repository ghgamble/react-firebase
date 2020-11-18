import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBeoGVFGC5ZthZEnNpLvyB-Qi19jw74V4M",
  authDomain: "just-clock-it-6537c.firebaseapp.com",
  databaseURL: "https://just-clock-it-6537c.firebaseio.com",
  projectId: "just-clock-it-6537c",
  storageBucket: "just-clock-it-6537c.appspot.com",
  messagingSenderId: "246574460342",
  appId: "1:246574460342:web:5587b78d6ce6dc58686517",
  measurementId: "G-BLL6BNTCZC"
});

const db = firebase.firestore();

export default db;

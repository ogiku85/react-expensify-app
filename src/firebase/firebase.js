import * as firebase from 'firebase';
import * as expensesAction from '../actions/expenses';

  // Your web app's Firebase configuration
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_APP_ID
  };
  const configBackup = {
    apiKey: "AIzaSyBh0mpqFd7vUyZwdglySM94RtWFrScIysA",
    authDomain: "react-expensify-app-c577f.firebaseapp.com",
    databaseURL: "https://react-expensify-app-c577f.firebaseio.com",
    projectId: "react-expensify-app-c577f",
    storageBucket: "react-expensify-app-c577f.appspot.com",
    messagingSenderId: "627808478048",
    appId: "1:627808478048:web:da9ba348be5a860c59b405"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};
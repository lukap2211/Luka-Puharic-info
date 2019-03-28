import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCK48ewKa6MxFJ_pa0GU1wMBC-w7xXfvCI",
  authDomain: "lukap-resume.firebaseapp.com",
  databaseURL: "https://lukap-resume.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

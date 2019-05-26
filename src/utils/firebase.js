import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBnRS2fLjQnOy0ZlhAnhGmb1vXRiGQ8IH4",
  authDomain: "todos-fe93f.firebaseapp.com",
  databaseURL: "https://todos-fe93f.firebaseio.com",
  projectId: "todos-fe93f",
  storageBucket: "todos-fe93f.appspot.com",
  messagingSenderId: "657389659793",
  appId: "1:657389659793:web:914064456ebaf78c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const todosRef = db.collection("Todos");

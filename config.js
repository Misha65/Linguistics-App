import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCORuDXcfvy6qQJH9XetddW72BRPqYM7Vo",
    authDomain: "languag-ce643.firebaseapp.com",
    databaseURL: "https://languag-ce643-default-rtdb.firebaseio.com",
    projectId: "languag-ce643",
    storageBucket: "languag-ce643.appspot.com",
    messagingSenderId: "21544541995",
    appId: "1:21544541995:web:cac80ffcd111c5811a2f6e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

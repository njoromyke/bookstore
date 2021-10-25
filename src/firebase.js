
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {


    apiKey: "AIzaSyDQ1b9pXVBlMH4sXfmeOJlbHU4J99vQ7Os",
    authDomain: "vitabuu-5f0e2.firebaseApp.com",
    projectId: "vitabuu-5f0e2",
    storageBucket: "vitabuu-5f0e2.appspot.com",
    messagingSenderId: "514728529692",   
    appId: "1:514728529692:web:7571998ba1b545f04234d9",
    measurementId: "G-1HWZ9BVCJT"

  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  
  export {db, auth};
  
  
  
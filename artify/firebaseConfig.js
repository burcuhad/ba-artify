import { initializeApp,getApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
/*
const firebaseConfig = {
    apiKey: "AIzaSyDOVjjlDesIlFEbKN4Tzhlg1f-ei0Rnd78",
    authDomain: "artify-d4a3c.firebaseapp.com",
    databaseURL: 'https://artify.eur3.firebasedatabase.app',
    projectId: "artify-d4a3c",
    storageBucket: "artify-d4a3c.appspot.com",
    messagingSenderId: "685867038897",
    appId: "1:685867038897:web:8e70bad3f820bdedbb8a90"
  };
*/

  const firebaseConfig = {
    apiKey: "AIzaSyC746m5DqFrMm6Ng6bNS9m3B-84lf7-rqA",
    authDomain: "artify-app-e0add.firebaseapp.com",
    projectId: "artify-app-e0add",
    storageBucket: "artify-app-e0add.appspot.com",
    messagingSenderId: "774599241080",
    appId: "1:774599241080:web:7695425c2e80437aea2c8d"
  };
console.log("hello")

 try {
    app = getApp()
} catch (error) {
    app = initializeApp(
        firebaseConfig)
}
export const db = getFirestore(app);
export const auth = getAuth(app);


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
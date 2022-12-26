import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuXUzUsSntx0rXau-kphRDL3H10S3FEy4",
    authDomain: "gamehub-f8677.firebaseapp.com",
    projectId: "gamehub-f8677",
    storageBucket: "gamehub-f8677.appspot.com",
    messagingSenderId: "434587479788",
    appId: "1:434587479788:web:e07f7d83f1c08c993bbfc9"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}
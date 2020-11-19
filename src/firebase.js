import firebase from 'firebase'
import "firebase/firestore"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBeV-3HmvYeV8j9UpF2Ii3ogiY-4wTJJ_w",
    authDomain: "portfolio-9a178.firebaseapp.com",
    databaseURL: "https://portfolio-9a178.firebaseio.com",
    projectId: "portfolio-9a178",
    storageBucket: "portfolio-9a178.appspot.com",
    messagingSenderId: "312066184196",
    appId: "1:312066184196:web:36a81db131971135ac1151"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
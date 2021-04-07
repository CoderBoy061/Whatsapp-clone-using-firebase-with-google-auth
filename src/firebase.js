// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBXdtHjjIZNfK2TVljpeqytMmFtfHkQ0jI",
    authDomain: "whatsapp-web-23255.firebaseapp.com",
    projectId: "whatsapp-web-23255",
    storageBucket: "whatsapp-web-23255.appspot.com",
    messagingSenderId: "239521399966",  
    appId: "1:239521399966:web:3e29756302b8843c4e678f",
    measurementId: "G-C4L16FLZFB"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
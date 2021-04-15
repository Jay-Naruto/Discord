import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAltWX4DU4mx1hz23lmKdsRKe32Q85oSzA",
    authDomain: "discord-clone-e70d5.firebaseapp.com",
    projectId: "discord-clone-e70d5",
    storageBucket: "discord-clone-e70d5.appspot.com",
    messagingSenderId: "955210019145",
    appId: "1:955210019145:web:e0b6da250df08925472a98",
    measurementId: "G-8T5B8PRGCQ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider();


export {auth,provider}
export default db
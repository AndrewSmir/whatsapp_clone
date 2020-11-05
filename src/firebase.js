import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCg7-HjGdrhHTQw64PFnVjYDetdeIa98qU",
    authDomain: "whatsapp-fcfbb.firebaseapp.com",
    databaseURL: "https://whatsapp-fcfbb.firebaseio.com",
    projectId: "whatsapp-fcfbb",
    storageBucket: "whatsapp-fcfbb.appspot.com",
    messagingSenderId: "601096583802",
    appId: "1:601096583802:web:95ea8c7ec41e3bd3e259c3",
    measurementId: "G-QLHWLMYMME"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAG3yTSx_VDOHyIT2dFAf70K9Nqf30uCNk",
  authDomain: "metodos-5fbea.firebaseapp.com",
  databaseURL: "https://metodos-5fbea.firebaseio.com",
  projectId: "metodos-5fbea",
  storageBucket: "metodos-5fbea.appspot.com",
  messagingSenderId: "665707825322",
  appId: "1:665707825322:web:1e0ace51077118c9a6e8d3",
  measurementId: "G-4E77CRZMR7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()



export {db, auth}
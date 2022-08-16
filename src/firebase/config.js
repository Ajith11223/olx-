import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDVTXcMPZtU6iwdKLjLTcx3_EUGt2x_7K8",
    authDomain: "fir-51014.firebaseapp.com",
    projectId: "fir-51014",
    storageBucket: "fir-51014.appspot.com",
    messagingSenderId: "942159427305",
    appId: "1:942159427305:web:af5f15d56ea40c4a8c6278",
    measurementId: "G-5TNX9LW8KN"
  };

 export default  firebase.initializeApp(firebaseConfig )
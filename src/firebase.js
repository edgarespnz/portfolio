import firebase from  'firebase/compat/app' 
import 'firebase/compat/auth' 

const app = firebase.initializeApp({
  apiKey: "AIzaSyBWI5Djdck79d_iig9e9p8XrAMUcMjW3Fw",
  authDomain: "personalportfolio-ceca9.firebaseapp.com",
  projectId: "personalportfolio-ceca9",
  storageBucket: "personalportfolio-ceca9.appspot.com",
  messagingSenderId: "894895837498",
  appId: "1:894895837498:web:4f7b9172aade4af0144003",
  measurementId: "G-S03MZWEXL0"
})

export const auth = app.auth()
export default app
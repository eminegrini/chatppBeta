import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA5aH3MdaYR4rEtTodyfETg__NLkAMf4As",
  authDomain: "chatapp-d6779.firebaseapp.com",
  databaseURL: "https://chatapp-d6779.firebaseio.com",
  projectId: "chatapp-d6779",
  storageBucket: "chatapp-d6779.appspot.com",
  messagingSenderId: "113598435941",
  appId: "1:113598435941:web:a3427f5bd7137a57c8ac8c",
  measurementId: "G-Q6ZHG48LM5"
};

firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db= firebase.database();

export default firebase

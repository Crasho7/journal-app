import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//toda esta info viene de la creacion de la app en firebase

const firebaseConfig = {
    apiKey: "AIzaSyDpOF_3XDOxmg5Tpz40CnDhIQ9W6mD0SYE",
    authDomain: "react-app-cursos-348d0.firebaseapp.com",
    databaseURL: "https://react-app-cursos-348d0.firebaseio.com",
    projectId: "react-app-cursos-348d0",
    storageBucket: "react-app-cursos-348d0.appspot.com",
    messagingSenderId: "802401091937",
    appId: "1:802401091937:web:a662693cf6846d575cc520"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_VXsKUGKU060Hn5wDEpNjVWF6Fe3zxuY",
    authDomain: "intelligence-nomad-backend.firebaseapp.com",
    projectId: "intelligence-nomad-backend",
    storageBucket: "intelligence-nomad-backend.appspot.com",
    messagingSenderId: "412434107597",
    appId: "1:412434107597:web:d38180bd91a9d914d96d84",
    measurementId: "G-QHTT100DKE"
});
const db = firebaseApp.firestore();
export {db};
import {initializeApp} from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYLbcZQHEUeucswyWGejnOpcjiUGRElW8",
    authDomain: "instaclone-1b2b6.firebaseapp.com",
    projectId: "instaclone-1b2b6",
    storageBucket: "instaclone-1b2b6.appspot.com",
    messagingSenderId: "817717093210",
    appId: "1:817717093210:web:ad8bfd73c8811d1af04963",
    measurementId: "G-3N6K1FKBKM"
  };

const app=initializeApp(firebaseConfig);

const auth=app.auth();
const storage=app.storage();

export {auth,storage};
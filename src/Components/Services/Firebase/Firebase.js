import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC99NhBckgOh5d-ypf-SAVVEs6WP7U31ZY",
    authDomain: "aux24-aa2eb.firebaseapp.com",
    projectId: "aux24-aa2eb",
    storageBucket: "aux24-aa2eb.appspot.com",
    messagingSenderId: "273636511014",
    appId: "1:273636511014:web:ab14fe9c164749384fc5e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
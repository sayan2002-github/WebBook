import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8l7Npar1ej3-_o14fZXJgo_wFgRq7OcU",
  authDomain: "webbook-d2d06.firebaseapp.com",
  projectId: "webbook-d2d06",
  storageBucket: "webbook-d2d06.appspot.com",
  messagingSenderId: "506904139877",
  appId: "1:506904139877:web:bf4c757dd4ddd59fcf8e8c",
  measurementId: "G-T43N6SDHYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
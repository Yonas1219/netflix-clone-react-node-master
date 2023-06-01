import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8m1cpIVaPLSWWBd-Z3tITTEsDCNFc1H8",
  authDomain: "react-netflix-clone-2b09e.firebaseapp.com",
  projectId: "react-netflix-clone-2b09e",
  storageBucket: "react-netflix-clone-2b09e.appspot.com",
  messagingSenderId: "897063621543",
  appId: "1:897063621543:web:6e5d17e6b4f5c26540dc82",
  measurementId: "G-F292CW0QL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwVFv2RozIetj8HxuqBcel8uHBWdoFfBw",
  authDomain: "sbinew-be993.firebaseapp.com",
  databaseURL: "https://sbinew-be993-default-rtdb.firebaseio.com",
  projectId: "sbinew-be993",
  storageBucket: "sbinew-be993.appspot.com",
  messagingSenderId: "917409860598",
  appId: "1:917409860598:web:a9fc1fea6df47acbd895d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
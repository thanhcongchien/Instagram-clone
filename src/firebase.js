import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArFQ8KDoIl6n53mTzrvqiwgYow5llvnOM",
  authDomain: "instagram-clone-react-e2181.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-e2181.firebaseio.com",
  projectId: "instagram-clone-react-e2181",
  storageBucket: "instagram-clone-react-e2181.appspot.com",
  messagingSenderId: "697196900670",
  appId: "1:697196900670:web:0e6a3b29832ef2f67abc6f",
  measurementId: "G-EFTTDE7RR0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};

// export default db;

// firebase.
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8zm3-EtM9FsXgvx_itSRVMf4FHm68a0Q",
  authDomain: "hockey-da724.firebaseapp.com",
  databaseURL: "https://hockey-da724-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hockey-da724",
  storageBucket: "hockey-da724.appspot.com",
  messagingSenderId: "559298105686",
  appId: "1:559298105686:web:381a2e330c30f5f04186f7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;


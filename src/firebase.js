import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDBEBqpfdRikXdFLsaIrWCzxFGeP-Spr2I",
  authDomain: "fieldproject-83b66.firebaseapp.com",
  projectId: "fieldproject-83b66",
  storageBucket: "fieldproject-83b66.appspot.com",
  messagingSenderId: "876233199233",
  appId: "1:876233199233:web:a996af12c5327ccdcf8780"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

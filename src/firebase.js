import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
 
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

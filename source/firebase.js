import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAl5rMh_6UFoIEk5IaCPupOxeh0TtytKpE",
  authDomain: "organiza-cf713.firebaseapp.com",
  projectId: "organiza-cf713",
  storageBucket: "organiza-cf713.appspot.com",
  messagingSenderId: "491959152268",
  appId: "1:491959152268:web:2716ad48017cc47bedd5a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;



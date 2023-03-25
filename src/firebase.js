import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOeUpvdxnpTE9h0qrvEZu2IBFqUWGGlq4',
  authDomain: 'twitter-clone-48e93.firebaseapp.com',
  projectId: 'twitter-clone-48e93',
  storageBucket: 'twitter-clone-48e93.appspot.com',
  messagingSenderId: '133084398784',
  appId: '1:133084398784:web:daf015f3fb224054175925',
  measurementId: 'G-Z55LR2042Q',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

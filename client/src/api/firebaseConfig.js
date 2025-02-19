import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAPt9_aiyW0yCcZrGF886i_4BE7lRv7zc", 
  authDomain: "ecommerce-mern-de73a.firebaseapp.com",
  projectId: "ecommerce-mern-de73a",
  storageBucket: "ecommerce-mern-de73a.firebasestorage.app",
  messagingSenderId: "962998434857",
  appId: "1:962998434857:web:5e25baa96f2cdab3b7b038"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
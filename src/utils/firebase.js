// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // <-- 🔥 Add this!

const firebaseConfig = {
  apiKey: "AIzaSyAnwkYxNdR9ctcER_AWvlbvRi43VmZJiJU",
  authDomain: "tobiloba-portfolio.firebaseapp.com",
  projectId: "tobiloba-portfolio",
  storageBucket: "tobiloba-portfolio.firebasestorage.app", // <-- ✅ corrected spelling (was missing `.appspot.com`)
  messagingSenderId: "390620679429",
  appId: "1:390620679429:web:993f92655a8cd2acb67b6c",
  measurementId: "G-YB4JK1QNQ2"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // <-- ✅ Add this


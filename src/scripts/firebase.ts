// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfiguration = {
  apiKey: "AIzaSyDLT9rdLFEpEzr8XpIkbceCRKnGmmd83mI",
  authDomain: "herbivorousgrill.firebaseapp.com",
  projectId: "herbivorousgrill",
  storageBucket: "herbivorousgrill.appspot.com",
  messagingSenderId: "594243375518",
  appId: "1:594243375518:web:56177bdaafe25b7e20068f",
};

export const firebaseInstance = initializeApp(firebaseConfiguration);

export const fireStoreInstance = getFirestore(firebaseInstance);

export const cloudStorageReference = getStorage(firebaseInstance);

export const firebaseAuthInstance = getAuth(firebaseInstance);

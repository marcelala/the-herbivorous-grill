// NPM package
import { initializeApp } from "firebase/app";

const firebaseConfiguration = {
    apiKey: "AIzaSyDLT9rdLFEpEzr8XpIkbceCRKnGmmd83mI",
    authDomain: "herbivorousgrill.firebaseapp.com",
    projectId: "herbivorousgrill",
    storageBucket: "herbivorousgrill.appspot.com",
    messagingSenderId: "594243375518",
    appId: "1:594243375518:web:56177bdaafe25b7e20068f"
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export default firebaseInstance;
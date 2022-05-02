import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8l9D23s5I21KtSwsBaWTIjJFUTNts8qI",
    authDomain: "trojans-348910.firebaseapp.com",
    projectId: "trojans-348910",
    storageBucket: "trojans-348910.appspot.com",
    messagingSenderId: "725800945435",
    appId: "1:725800945435:web:9801878b3f9a4af86135be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

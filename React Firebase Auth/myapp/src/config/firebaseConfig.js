import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBrlPnqDein62rJ5acK8NA5y6yuM7RXayg",
    authDomain: "myweb-4323f.firebaseapp.com",
    projectId: "myweb-4323f",
    storageBucket: "myweb-4323f.appspot.com",
    messagingSenderId: "777426054669",
    appId: "1:777426054669:web:18e60c9e92124e07daaf44",
    measurementId: "G-VESRSQTZ9G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
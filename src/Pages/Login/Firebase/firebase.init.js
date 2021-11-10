import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuthentication = () =>{
    return initializeApp(firebaseConfig);
}

export default initializeFirebaseAuthentication;
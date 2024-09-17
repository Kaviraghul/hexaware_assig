import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase";


export const doSignInWithEmailAndPassword =  async (userCredentials) => {
    return signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
}

export const doSignOut = () => {
    return auth.signOut();
}
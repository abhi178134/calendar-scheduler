import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const deleteEvent = async () => {
    await deleteDoc(doc(db,"id",""));
}

export default deleteEvent;
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase_config.json';
import { getDatabase, ref, set , child, get} from "firebase/database";

// initialize firebase 
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const writeToRealTimeDB = (path, object) => {
    set(ref(db, path), object);
}

const readFromRealTimeDB = async (path) => {
    console.log(`Retrieving ${path}`);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {

        return snapshot.val();
    } else {

        return null;
    }
      
}

export { writeToRealTimeDB, readFromRealTimeDB };
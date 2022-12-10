import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, child, get,
} from 'firebase/database';
import firebaseConfig from '../../../firebase_config.json';

// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const writeToRealTimeDB = (path, object) => {
  set(ref(db, path), object);
};

const readFromRealTimeDB = async (path) => {
  console.log(`Retrieving ${path}`);
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, path));
  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
};

export { writeToRealTimeDB, readFromRealTimeDB };

import * as Location from 'expo-location';
import { writeToRealTimeDB, readFromRealTimeDB } from './database/firebaseDB';

// write User's data into firebase
const writeUserData = (currentUserName, locationPayload) => writeToRealTimeDB(`users/${currentUserName}`, locationPayload);

const updateMyCurrentLocation = async (currentUserName) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    // setErrorMsg('Permission to access location was denied');
    return null;
  }

  const location = await Location.getCurrentPositionAsync({});
  if (location != null) {
    writeUserData(currentUserName, location);
  }
  console.log(location);

  return location;
};

// read the db data for once
const getUserData = async (userId) => {
  const path = `users/${userId}`;
  const result = await readFromRealTimeDB(path);
  if (result == null) {
    console.log('User not found');
  } else {
    console.log(JSON.stringify(result));
  }
};

export { updateMyCurrentLocation, getUserData };

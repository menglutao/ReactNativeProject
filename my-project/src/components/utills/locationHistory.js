// This file provides the function to show the history locations per day and filter the locations which distances more than 1 km.
//Basic idea is to read location from database and sort them by time stamp / distance then list them.

import * as Location from 'expo-location';
import { writeToRealTimeDB, readFromRealTimeDB } from '../database/firebaseDB';

const showHistoryLocationFromDB = async(userId)=>{
  const path = `users/${userId}`;
  const result = await readFromRealTimeDB(path);
  if (result == null) {
    console.log('User not found');
  } else {
    console.log(JSON.stringify(result));
  }
  
  const history_dict = {
    'key': '',
    'value': []
  } // include the userID and coordinates.
  const userCoordinates =  [ result.coords.latitude,result.coords.longitude]
  const timestamp = [result.timestamp]
  // add element into history_dict
  history_dict['key'] = userId;
  history_dict['value'].push(userCoordinates);

  console.log(history_dict);
  return history_dict;

}

export { showHistoryLocationFromDB };





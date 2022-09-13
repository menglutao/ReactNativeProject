import React, { useEffect } from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import {writeLocationToDB,readLocationFromDB} from '../location';
import {useState} from 'react';
import { async } from '@firebase/util';


 function TrackerPage({ navigation, route }) {
  // const currentUserLocation = readLocationFromDB(route.params.currentUserName);
  // const trackedUserLocation = readLocationFromDB(route.params.trackedUserName);
  // console.log(currentUserLocation);


  const [coordinates, setCoordinates] = useState([]);

  const fetchCurrentUserLocation = async() => {
    const currentUserLocation = await readLocationFromDB(route.params.currentUserName);
    setCoordinates(currentUserLocation);
  };

  const fetchTrakerLocation = async() => {
    const trackedUserLocation = await readLocationFromDB(route.params.trackedUserName);
    setCoordinates(trackedUserLocation);
  };

useEffect(() => {
  fetchCurrentUserLocation();
  fetchTrakerLocation();
} , []);




  return (
    <>
     <Text>
      You are {route.params.currentUserName}, and you are tracking {route.params.trackedUserName}
    </Text>
    <Text>
      {coordinates.length > 0 ? `${coordinates[0]}, ${coordinates[1]}` : 'No location found'}
    </Text>
    </>
  
   
  );
}

export default TrackerPage;

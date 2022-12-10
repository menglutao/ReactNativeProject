import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import {writeLocationToDB,readLocationFromDB } from '../utills/location';
import {MapView} from './MapView';
import { async } from '@firebase/util';
import Styles from '../styles/Styles';


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
  
      <SafeAreaView style={Styles.container}>
        <Text>
          You are {route.params.currentUserName}, and you are tracking {route.params.trackedUserName}
        </Text>
        <Text>
          {coordinates.length > 0 ? `${coordinates[0]}, ${coordinates[1]}` : 'No location found'}
        </Text>
        <Button
            title="Update My Current Location"
            color="#fc4903"
            onPress={() => writeLocationToDB(route.params.currentUserName)}
          />

          <View style={{ position: 'absolute', zIndex: 2 }}>
            <MapView />
          </View>

      </SafeAreaView>
  );
}

export default TrackerPage;

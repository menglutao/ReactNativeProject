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
  const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)
  const [isScriptElementLoaded, setScriptElementLoaded] = useState(false)

  const fetchCurrentUserLocation = async() => {
    const currentUserLocation = await readLocationFromDB(route.params.currentUserName);
    setCoordinates(currentUserLocation);
  };

  const fetchTrakerLocation = async() => {
    const trackedUserLocation = await readLocationFromDB(route.params.trackedUserName);
    setCoordinates(trackedUserLocation);
  };

  useEffect(() => {
    const linkElement = document.createElement("link");
          linkElement.setAttribute("rel", "stylesheet");
          linkElement.setAttribute("type", "text/css");
          linkElement.setAttribute(
            "href",
            "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          );
          document.head.appendChild(linkElement);

          setLinkElementLoaded(true)
    
    const scriptElement = document.createElement("link");
          scriptElement.setAttribute(
            "href",
            "https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          );
          document.head.appendChild(scriptElement);

          setScriptElementLoaded(true)

    fetchCurrentUserLocation();
    fetchTrakerLocation();
  } , []);

  return (
  
      <SafeAreaView style={Styles.container_tracker_page}>
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
        
        {isScriptElementLoaded && isLinkElementLoaded && coordinates.length > 0 &&
          <View>
            <MapView latitude={coordinates[0]} longitude={coordinates[1]}/>
          </View>
        }

      </SafeAreaView>
  );
}

export default TrackerPage;

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import {writeLocationToDB,readLocationFromDB } from '../utills/location';
import {showHistoryLocationFromDB} from '../utills/LocationHistory';
import {MapView} from './MapView';
import { async } from '@firebase/util';
import Styles from '../styles/Styles';


function TrackerPage({ navigation, route }) {
  // const currentUserLocation = readLocationFromDB(route.params.currentUserName);
  // const trackedUserLocation = readLocationFromDB(route.params.trackedUserName);
  // console.log(currentUserLocation);


  const [userCoordinates, setUserCoordinates] = useState([]);
  const [trackedCoordinates, setTrackedCoordinates] = useState([]);
  const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)
  const [isScriptElementLoaded, setScriptElementLoaded] = useState(false)
  const [LocationHistory, setLocationHistory] = useState([]) 

  const fetchCurrentUserLocation = async() => {
    const currentUserLocation = await readLocationFromDB(route.params.currentUserName);
    setUserCoordinates(currentUserLocation);
  };

  const fetchTrakerLocation = async() => {
    const trackedUserLocation = await readLocationFromDB(route.params.trackedUserName);
    setTrackedCoordinates(trackedUserLocation);
  };

  useEffect(() => {
    async function fetchLocationHistory() {
      const historyDict = await showHistoryLocationFromDB(route.params.currentUserName);
      setLocationHistory(historyDict.value);
    }
    fetchLocationHistory();
  }, [route.params.currentUserName]);



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
          Your location: {userCoordinates.length > 0 ? `${userCoordinates[0]}, ${userCoordinates[1]}` : 'No location found'} <br/>
          Love location: {trackedCoordinates.length > 0 ? `${trackedCoordinates[0]}, ${trackedCoordinates[1]}` : 'No location found'}
        </Text>   
        <div>
        <h2>Location history for user {route.params.currentUserName}:</h2>
        <ul>
          {LocationHistory.map((location, index) => (
            <li key={index}>{location.join(', ')}</li>
          ))}
        </ul>
      </div>
        
        <Button
            title={"Update My Current Location (I'm " + route.params.currentUserName + ")"}
            color="#fc4903"
            onPress={() => writeLocationToDB(route.params.currentUserName)}
          />

          <Button
            title="Show User History Location"
            color="#479A73"
            onPress={() => showHistoryLocationFromDB(route.params.currentUserName)}
          />
        
        {isScriptElementLoaded && isLinkElementLoaded && userCoordinates.length > 0 && trackedCoordinates.length > 0 &&
          <View>
            <MapView latitude={trackedCoordinates[0]} longitude={trackedCoordinates[1]} person={route.params.trackedUserName}/>
          </View>
        }

      </SafeAreaView>
  );
}

export default TrackerPage;

import React, { useState,useEffect} from 'react';
import L from 'leaflet';
import { View } from 'react-native';


export const MapView = () => {
  const [map, setMap] = useState(null);

  const initializeMap = () => {
    // Create a new map instance
    const mapInstance = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
    });

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(mapInstance);

    // Save the map instance in the state
    setMap(mapInstance);
  };

  useEffect(() => {
    initializeMap();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <div id="map" style={{ height: '50%', width: '50%' }} />
    </View>
  );
};


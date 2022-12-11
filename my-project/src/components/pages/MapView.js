import React, { useState,useEffect} from 'react';
import L from 'leaflet';

export const MapView = ({ latitude, longitude, person }) => {
  const [map, setMap] = useState(null);

  var greenIcon = L.icon({
      iconUrl: (person == 'Meng' ? require("../../../assets/babe.png") : require("../../../assets/babe2.png")),

      iconSize:     [95, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  const initializeMap = () => {
    // Create a new map instance
    const mapInstance = L.map('map').setView([latitude, longitude], 13);

    // Add a tile layer to the map
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    // Create a new marker instance
    L.marker([latitude, longitude], {icon: greenIcon}).addTo(mapInstance);

    // Save the map instance in the state
    setMap(mapInstance);
  };

  useEffect(() => {
    initializeMap();
  }, []);

  return (
    <>
      <div id="map" style={{ height: 750, width: "100%"  }} />
    </>
  );
};


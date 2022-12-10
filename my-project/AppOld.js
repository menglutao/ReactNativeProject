import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  MAP_TYPES,
  PROVIDER_DEFAULT,
  UrlTile,
  Marker,
} from 'react-native-maps';
import { updateMyCurrentLocation, getUserData } from './src/components/location';

const INITIAL_REGION = {
  latitude: 59.44089,
  longitude: 24.72749,
  latitudeDelta: 2.036923536294034,
  longitudeDelta: 2.48705391138792,
};

function Separator() {
  return <View style={styles.separator} />;
}

function App() {
  const [currentUserName, onChangeCurrentUserName] = React.useState('Meng');
  const [trackedUserName, onChangeTrackedUserName] = React.useState('Daniel');
  const mapRef = useRef(null);


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCurrentUserName}
          value={currentUserName}
        />
        <Button
          title="Update My Current Location"
          color="#fc4903"
          onPress={() => updateMyCurrentLocation(currentUserName)}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
        </Text>
        <Button
          title="Write User Data"
          disabled
          color="#fc8003"
          onPress={() => Alert.alert('User data not written')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Read user data by userId
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTrackedUserName}
          value={trackedUserName}
        />

        <Button
          title="Track Your Love"
          color="#fcc203"
          onPress={() => getUserData(trackedUserName)}
        />
      </View>
      <Separator />
      {/* <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            color="#d1ceb0"
            onPress={() => Alert.alert('Left button')}
          />
          <Button
            title="Right button"
            color="#d1ceb0"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View> */}

      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          initialRegion={INITIAL_REGION}
          showsMyLocationButton
          showsCompass
        >
          <Marker coordinate={{ latitude: 59.44089, longitude: 24.72749 }} title="My Location" />
        </MapView>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 350,
    height: 300,
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import { updateMyCurrentLocation, getUserData } from './src/location';

import MapView, {
  PROVIDER_GOOGLE,
  MAP_TYPES,
  PROVIDER_DEFAULT,
  UrlTile,
  Marker,
} from "react-native-maps";


function Separator() {
  return <View style={styles.separator} />;
}

function App() {
  const [currentUserName, onChangeCurrentUserName] = React.useState('Meng');
  const [trackedUserName, onChangeTrackedUserName] = React.useState('Daniel');
  // const [region, onChangeRegion] = React.useState({
  //   region: {
  //     latitude: 45.4310163,
  //     longitude: 11.8796273,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // });

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
        <MapView style={styles.map} />
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
    width: 200,
    height: 200,
  },
});

export default App;

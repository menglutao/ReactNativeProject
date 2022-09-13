import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import HomePage from './src/pages/HomePage';
import TrackerPage from "./src/pages/TrackerPage";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "HomePage"
          component = {HomePage}
          options = {{ title: "Welcome!" }}
          />
        <Stack.Screen name="TrackerPage" component={TrackerPage} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


export default App;

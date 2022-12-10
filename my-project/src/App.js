import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { registerRootComponent } from 'expo';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';

import TrackerPage from './components/pages/TrackerPage';
import HomePage from './components/pages/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Welcome!' }}
        />
        <Stack.Screen name="TrackerPage" component={TrackerPage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default registerRootComponent(App);

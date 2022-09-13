import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';

const Stack = createNativeStackNavigator();

function Separator() {
  return <View style={styles.separator} />;
}

const HomePage = ({ navigation }) => {
  const [currentUserName, onChangeCurrentUserName] = React.useState('Meng');
  const [trackedUserName, onChangeTrackedUserName] = React.useState('Daniel');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          What's your name / ID?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCurrentUserName}
          value={currentUserName}
        />
      </View>
      <View>
        <Text style={styles.title}>
          Who's name / ID are you tracking?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTrackedUserName}
          value={trackedUserName}
        />
      </View>
      <Separator />
      <Button
        title="Start Tracking!"
        color="#fcc203"
        onPress = {() => navigation.navigate('TrackerPage', { name: 'Jane' })}
        //onPress={() => openTrackerView()}
      />
    </SafeAreaView>
  )
}

const TrackerPage = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

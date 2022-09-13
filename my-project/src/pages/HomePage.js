import React from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import Styles from '../Styles';

function Separator() {
  return <View style={styles.separator} />;
}

function HomePage({ navigation }) {
  const [currentUserName, setChangeCurrentUserName] = React.useState('Meng');
  const [trackedUserName, setChangeTrackedUserName] = React.useState('Daniel');


  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.title}>
          What's your name / ID?
        </Text>
        <TextInput
          style={Styles.input}
          onChangeText={setChangeCurrentUserName}
          value={currentUserName}
        />
      </View>
      <View>
        <Text style={Styles.title}>
          Who's name / ID are you tracking?
        </Text>
        <TextInput
          style={Styles.input}
          onChangeText={setChangeTrackedUserName}
          value={trackedUserName}
        />
      </View>
      <Separator />
      <Button
        title="Start Tracking!"
        color="#fcc203"
        onPress={() => navigation.navigate('TrackerPage', { currentUserName, trackedUserName })}
      />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomePage;

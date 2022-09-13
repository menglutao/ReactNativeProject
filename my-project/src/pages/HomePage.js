import React from "react";
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';
import Styles from '../Styles'

function Separator() {
  return <View style={styles.separator} />;
}

const HomePage = ({ navigation }) => {
    const [currentUserName, onChangeCurrentUserName] = React.useState('Meng');
    const [trackedUserName, onChangeTrackedUserName] = React.useState('Daniel');
  
    return (
      <SafeAreaView style={Styles.container}>
        <View>
          <Text style={Styles.title}>
            What's your name / ID?
          </Text>
          <TextInput
            style={Styles.input}
            onChangeText={onChangeCurrentUserName}
            value={currentUserName}
          />
        </View>
        <View>
          <Text style={Styles.title}>
            Who's name / ID are you tracking?
          </Text>
          <TextInput
            style={Styles.input}
            onChangeText={onChangeTrackedUserName}
            value={trackedUserName}
          />
        </View>
        <Separator />
        <Button
          title="Start Tracking!"
          color="#fcc203"
          onPress = {() => navigation.navigate('TrackerPage', { currentUserName: currentUserName, trackedUserName: trackedUserName })}
        />
      </SafeAreaView>
    )
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
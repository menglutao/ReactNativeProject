import React from "react";
import {
  StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput,
} from 'react-native';

const TrackerPage = ({ navigation, route }) => {
    return <Text>You are {route.params.currentUserName}, and you are tracking {route.params.trackedUserName}</Text>;
  };

export default TrackerPage;
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UsingDefaultStyling from './components/UsingDefaultStyling';
import UsingScssStyling from './components/UsingScssStyling';

function TextSamples() {
  return (
    <React.Fragment>
      <UsingDefaultStyling />
      <UsingScssStyling />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <TextSamples />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

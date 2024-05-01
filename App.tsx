import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function TextSamples() {
  return (
    <React.Fragment>
      <Text>H1 Text Title Sample</Text>
      <Text>H2 Text Title Sample</Text>
      <Text>p Text Paragraph Sample</Text>
      <Text>Text Style Sample 1</Text>
      <Text>Text Style Sample 2</Text>
      <Text>Text Style Sample 3</Text>
      <Text>Text Style Sample 4</Text>
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

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UsingDefaultStyling from './components/UsingDefaultStyling';
import UsingScssStyling from './components/UsingScssStyling';
import SimpleStyle from './components/SimpleStyle';
import ModalSample from './components/common/Modal';

function TextSamples() {
  return (
    <React.Fragment>
      <ModalSample openText='シンプルサンプル' hideText='閉じる'>
        <SimpleStyle />
      </ModalSample>
      <ModalSample openText='通常スタイル' hideText='閉じる'>
        <UsingDefaultStyling />
      </ModalSample>
      <ModalSample openText='SCSS版スタイル' hideText='閉じる'>
        <UsingScssStyling />
      </ModalSample>
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

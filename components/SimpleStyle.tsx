import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// @ts-ignore
import style from '../style/components/simpleStyle.scss';

export default (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>これは通常のスタイリングです。</Text>
      </View>

      <View>
        <Text style={styles.text2}>これはSCSSのスタイリングです。</Text>
      </View>
    </View>
  );
}

const styles = Object.assign({}, style, StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  }
}));

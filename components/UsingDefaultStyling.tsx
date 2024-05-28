import React from "react";
import { Text, StyleSheet, View } from  'react-native';

/**
 * デフォルトのスタイリング手法で記述
 */

export default () => {
  return (
    <View style={[styles.container, styles.borderBlack, styles.spacing]}>
      <Text style={[
        styles.textCommon,
        styles.spacing,
        {
          fontSize: 20
        }
      ]}>
        通常のReact Nativeスタイリング
      </Text>
      <Text style={[styles.textCommon, styles.textH1]}>H1 Text Title Sample</Text>
      <Text style={[styles.textCommon, styles.textH2]}>H2 Text Title Sample</Text>
      <Text style={[styles.textCommon, styles.textParagraph, styles.textUnderline]}>p Text Paragraph Sample</Text>
      <Text style={[styles.textCommon, styles.textH3, styles.textRed]}>Text Style Sample 1</Text>
      <Text style={styles.textCommon}>Text Style Sample 2</Text>
      <Text style={[styles.textCommon, styles.textUnderline]}>Text Style Sample 3</Text>
      <Text style={[styles.textCommon, styles.textBlue]}>Text Style Sample 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  borderBlack: {
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  spacing: {
    margin: 10,
  },
  textCommon: {
    color: "black",
    fontSize: 9,
  },
  textH1: {
    fontSize: 30
  },
  textH2: {
    fontSize: 25
  },
  textH3: {
    fontSize: 15
  },
  textRed: {
    color: 'red'
  },
  textBlue: {
    color: 'blue'
  },
  textParagraph: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
  },
  textUnderline: {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  }
});

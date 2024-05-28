import React from "react";
import { Text, View } from  'react-native';
// @ts-ignore
import styles from '../style/components/componentStyle.scss';

/**
 * Scssとreact-native-sass-transformerを利用した手法で記述
 */

export default (): React.JSX.Element => {
  return (
    <View style={[styles.container, styles.borderBlack, styles.spacing]}>
      <Text style={[
        styles.textCommon,
        styles.spacing,
        {
          fontSize: 20
        }
      ]}>
        SCSS React Nativeスタイリング
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

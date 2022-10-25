import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle> | undefined;
};
/**
 * Add horizontal spacing by default and has a height of 1dp.
 * @param {style} Styling view property.
 * @returns Return a empty view component.
 */
const Spacer: React.FC<Props> = ({style}) => {
  return <View style={[styles.container, style]} />;
};

export default Spacer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 1,
  },
});

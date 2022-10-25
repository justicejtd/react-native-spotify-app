import CustomButton from './CustomButton';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

type Props = {
  label: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: StyleProp<TextStyle> | undefined;
};

const TextButton: React.FC<Props> = ({
  label,
  buttonStyle,
  labelStyle,
  onPress,
}) => {
  return (
    <CustomButton
      label={label}
      buttonStyle={[styles.button, buttonStyle]}
      labelStyle={labelStyle}
      onPress={onPress}
    />
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
  },
});

import React from 'react';
import CustomButton from './CustomButton';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Theme} from '../../../../theme/Theme';
import useTheme from '../../../../theme/useTheme';

type Props = {
  label: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: StyleProp<ViewStyle> | undefined;
};

const FlatButton: React.FC<Props> = ({
  label,
  buttonStyle,
  labelStyle,
  onPress,
}) => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <CustomButton
      label={label}
      buttonStyle={[style.button, buttonStyle]}
      labelStyle={labelStyle}
      onPress={onPress}
    />
  );
};

export default FlatButton;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    button: {
      borderRadius: 25,
      backgroundColor: colors.primary,
    },
  });
};

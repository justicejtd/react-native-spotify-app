import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';
import Label from '../../Texts/Label';

type Props = {
  label: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: StyleProp<TextStyle> | undefined;
};

const CustomButton: React.FC<Props> = ({
  label,
  buttonStyle,
  labelStyle,
  onPress,
}) => {
  const theme = useTheme();
  const buttonStyles = styles(theme);
  return (
    <TouchableOpacity
      style={[buttonStyles.button, buttonStyle]}
      onPress={onPress}>
      <Label style={[buttonStyles.label, labelStyle]}>{label}</Label>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 48,
      backgroundColor: colors.primary,
    },
    label: {
      color: colors.secondary,
      fontWeight: 'bold',
    },
  });
};

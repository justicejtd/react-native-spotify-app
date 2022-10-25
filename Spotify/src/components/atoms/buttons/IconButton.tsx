import React, {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const IconButton: React.FC<PropsWithChildren<Props>> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;

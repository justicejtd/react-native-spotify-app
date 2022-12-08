import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from '../../icons/Icon';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
};

const IconButton: React.FC<Props> = ({onPress, style, iconStyle, source}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon style={iconStyle} source={source} />
    </TouchableOpacity>
  );
};

export default IconButton;

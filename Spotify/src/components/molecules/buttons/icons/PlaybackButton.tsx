import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import IconButton from '../../../atoms/buttons/IconButton';
import Playback from '../../../atoms/icons/play/PlayBack';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | undefined;
  iconStyle?: StyleProp<TextStyle>;
};

const PlaybackButton: React.FC<Props> = ({onPress, style, iconStyle}) => {
  return (
    <IconButton style={style} onPress={onPress}>
      <Playback style={iconStyle} />
    </IconButton>
  );
};

export default PlaybackButton;

import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import PlayForwardIcon from '../../icons/play/Playforward';
import IconButton from '../iconButton/IconButton';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | undefined;
  forwardIconStyle?: StyleProp<TextStyle>;
};

const PlayForwardButton: React.FC<Props> = ({
  onPress,
  style,
  forwardIconStyle,
}) => {
  return (
    <IconButton style={style} onPress={onPress}>
      <PlayForwardIcon style={forwardIconStyle} />
    </IconButton>
  );
};

export default PlayForwardButton;

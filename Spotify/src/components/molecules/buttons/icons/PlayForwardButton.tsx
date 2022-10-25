import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import IconButton from '../../../atoms/buttons/IconButton';
import PlayForwardIcon from '../../../atoms/icons/play/Playforward';

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

import React from 'react';
import {
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import icons from '../../../../../assets/icons/icons';
import IconButton from '../IconButton';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isPlaying: boolean;
  style?: StyleProp<ViewStyle>;
  pauseIconStyle?: StyleProp<ImageStyle>;
  playIconStyle?: StyleProp<ImageStyle>;
};

const PlayPauseIconButton: React.FC<Props> = ({
  onPress,
  isPlaying,
  style,
  pauseIconStyle,
  playIconStyle,
}) => {
  return isPlaying ? (
    <IconButton
      style={style}
      iconStyle={pauseIconStyle}
      source={icons.pauseFilled}
      onPress={onPress}
    />
  ) : (
    <IconButton
      style={style}
      iconStyle={playIconStyle}
      source={icons.playFilled}
      onPress={onPress}
    />
  );
};

export default PlayPauseIconButton;

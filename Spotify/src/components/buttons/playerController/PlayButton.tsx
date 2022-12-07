import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../constants/styles/colors';
import PauseFilledIcon from '../../icons/play/PauseFilledIcon';
import PlayFilledIcon from '../../icons/play/PlayFilledIcon';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isPlayed: boolean;
  style?: StyleProp<ViewStyle> | undefined;
};

const PlayButton: React.FC<Props> = ({onPress, isPlayed, style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {isPlayed ? (
        <PauseFilledIcon style={styles.outlineIcon} />
      ) : (
        <PlayFilledIcon />
      )}
    </TouchableOpacity>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  outlineIcon: {
    color: colors.WHITE,
  },
});

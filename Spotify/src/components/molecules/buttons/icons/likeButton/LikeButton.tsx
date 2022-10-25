import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../../../constants/styles/colors';
import HeartFilledIcon from '../../../../atoms/icons/heart/HeartFilledIcon';
import HeartOutlineIcon from '../../../../atoms/icons/heart/HeartOutlineIcon';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isLiked: boolean;
  style?: StyleProp<ViewStyle> | undefined;
  heartFilledStyle?: StyleProp<TextStyle>;
  heartOutlineStyle?: StyleProp<TextStyle>;
};

const LikeButton: React.FC<Props> = ({
  onPress,
  isLiked,
  style,
  heartFilledStyle,
  heartOutlineStyle,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {isLiked ? (
        <HeartFilledIcon style={[styles.filledIcon, heartFilledStyle]} />
      ) : (
        <HeartOutlineIcon style={heartOutlineStyle} />
      )}
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  filledIcon: {
    color: colors.GREEN,
  },
});

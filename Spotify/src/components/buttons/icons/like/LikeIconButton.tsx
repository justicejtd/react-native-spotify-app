import React from 'react';
import {
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import icons from '../../../../../assets/icons/icons';
import {colors} from '../../../../constants/styles/colors';
import IconButton from '../IconButton';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isLiked: boolean;
  style?: StyleProp<ViewStyle> | undefined;
  heartFilledIconStyle?: StyleProp<ImageStyle>;
  heartOutlineIconStyle?: StyleProp<ImageStyle>;
};

const LikeIconButton: React.FC<Props> = ({
  onPress,
  isLiked,
  style,
  heartFilledIconStyle,
  heartOutlineIconStyle,
}) => {
  return isLiked ? (
    <IconButton
      style={style}
      iconStyle={[styles.heartFilledIcon, heartFilledIconStyle]}
      source={icons.heartFilled}
      onPress={onPress}
    />
  ) : (
    <IconButton
      style={style}
      iconStyle={heartOutlineIconStyle}
      source={icons.heartOutline}
      onPress={onPress}
    />
  );
};

export default LikeIconButton;

const styles = StyleSheet.create({
  heartFilledIcon: {
    tintColor: colors.GREEN,
  },
});

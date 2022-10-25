import {StyleProp, TextStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import iconStyles from '../styles/iconStyes';
import useTheme from '../../../../theme/useTheme';

const ICON_PLAY_FORWARD = 'play-forward';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
};

const PlayForwardIcon: React.FC<Props> = ({style}) => {
  const theme = useTheme();
  const styles = iconStyles(theme);

  return <Icon style={[styles.icon, style]} name={ICON_PLAY_FORWARD} />;
};

export default PlayForwardIcon;

import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import IconSize from '../../constants/iconSize/IconSize';
import {Theme} from '../../theme/Theme';
import useTheme from '../../theme/useTheme';

type Props = {
  source: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
};

const Icon: React.FC<Props> = ({source, style}) => {
  const theme = useTheme();
  const iconStyles = styles(theme);

  return <Image style={[iconStyles.image, style]} source={source} />;
};

export default Icon;

const styles = ({colors}: Theme) =>
  StyleSheet.create({
    image: {
      height: IconSize.S,
      width: IconSize.S,
      tintColor: colors.icon,
    },
  });

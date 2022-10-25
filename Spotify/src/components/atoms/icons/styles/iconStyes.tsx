import {StyleSheet} from 'react-native';
import IconSize from '../../../../constants/iconSize/IconSize';
import {Theme} from '../../../../theme/Theme';

const iconStyles = ({colors}: Theme) => {
  return StyleSheet.create({
    icon: {
      color: colors.icon,
      fontSize: IconSize.S,
    },
  });
};

export default iconStyles;

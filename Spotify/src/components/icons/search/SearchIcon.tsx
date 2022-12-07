import {StyleProp, TextStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../../theme/useTheme';
import iconStyles from '../styles/iconStyes';

const ICON_SEARCH = 'search';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
};

const SearchIcon: React.FC<Props> = ({style}) => {
  const theme = useTheme();
  const styles = iconStyles(theme);

  return <Icon style={[styles.icon, style]} name={ICON_SEARCH} />;
};

export default SearchIcon;

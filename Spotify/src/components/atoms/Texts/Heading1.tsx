import React, {PropsWithChildren} from 'react';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FontSize} from '../../../constants/styles/typography';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
};

const Heading1: React.FC<PropsWithChildren<Props>> = ({style, children}) => {
  const theme = useTheme();
  const headingStyles = styles(theme);

  return <Text style={[headingStyles.text, style]}>{children}</Text>;
};

export default Heading1;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    text: {
      fontSize: FontSize.H1,
      color: colors.text,
      fontWeight: 'bold',
    },
  });
};

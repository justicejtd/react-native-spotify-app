import React, {PropsWithChildren} from 'react';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FontSize} from '../../../constants/styles/typography';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
  numberOfLines?: number | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
};

const Label: React.FC<PropsWithChildren<Props>> = ({
  style,
  children,
  numberOfLines,
  ellipsizeMode,
}) => {
  const theme = useTheme();
  const labelStyles = styles(theme);

  return (
    <Text
      style={[labelStyles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

export default Label;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    text: {
      fontSize: FontSize.P1,
      color: colors.text,
    },
  });
};

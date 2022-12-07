import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FontSize} from '../../constants/styles/typography';
import {Theme} from '../../theme/Theme';
import useTheme from '../../theme/useTheme';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
};

/**
 * A text component used for titles.
 * @param { StyleProp<TextStyle> | undefined} style Styling of the Title component.
 * @param { string } children Name of the title.
 * @return { React.FC<PropsWithChildren<Props>> } Return a FC with a Text.
 */
const Title: React.FC<PropsWithChildren<Props>> = ({style, children}) => {
  const theme = useTheme();
  const titleStyles = styles(theme);

  return <Text style={[titleStyles.text, style]}>{children}</Text>;
};

export default Title;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: FontSize.H2,
      fontWeight: 'bold',
    },
  });
};

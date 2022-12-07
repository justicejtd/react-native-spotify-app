import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FontSize} from '../../constants/styles/typography';
import {Theme} from '../../theme/Theme';
import useTheme from '../../theme/useTheme';

type Props = {
  style?: StyleProp<TextStyle> | undefined;
  numberOfLines?: number | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
};

/**
 * A text component used for titles.
 * @param { StyleProp<TextStyle> | undefined} style Styling of the Subtitle component.
 * @param { string } children Name of the subtitle.
 * @param { number | undefined } numberOfLines Sets the maximum number of lines.
 * @param {  'head' | 'middle' | 'tail' | 'clip' | undefined } ellipsizeMode Sets ellipsize when text is longer than the container size.
 * @return { React.FC<PropsWithChildren<Props>> } Return a FC with a Text.
 */
const Subtitle: React.FC<PropsWithChildren<Props>> = ({
  style,
  children,
  numberOfLines,
  ellipsizeMode,
}) => {
  const theme = useTheme();
  const titleStyles = styles(theme);

  return (
    <Text
      style={[titleStyles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

export default Subtitle;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: FontSize.H4,
    },
  });
};

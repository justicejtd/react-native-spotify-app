import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';

type Props = Pick<ViewProps, 'style' | 'children'>;

const ScreenView: React.FC<Props> = ({children, style}) => {
  const theme = useTheme();
  const screenStyles = styles(theme);

  return <View style={[screenStyles.container, style]}>{children}</View>;
};

export default ScreenView;

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};

import {Theme} from '@react-navigation/native';
import useTheme from './useTheme';

const useNavTheme = () => {
  const {colors} = useTheme();
  const navTheme: Theme = {
    dark: false,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      notification: colors.notification,
    },
  };
  return navTheme;
};

export default useNavTheme;

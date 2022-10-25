import {DefaultTheme} from '@react-navigation/native';
import {colors} from '../constants/styles/colors';
import {Theme} from './Theme';

const appTheme: Theme = {
  colors: {
    primary: colors.GREEN,
    secondary: colors.BLACK,
    background: colors.BLACK,
    card: colors.BLACK,
    text: colors.WHITE,
    border: DefaultTheme.colors.border,
    notification: DefaultTheme.colors.notification,
    icon: colors.WHITE,
    surface: colors.LIGHT_GRAY,
  },
};

export default appTheme;

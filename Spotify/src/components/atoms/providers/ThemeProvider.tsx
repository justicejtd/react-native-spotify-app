import React, {createContext, PropsWithChildren} from 'react';
import appTheme from '../../../theme/appTheme';
import {Theme} from '../../../theme/Theme';

export const ThemeContext = createContext<Theme>(appTheme);

type Props = {
  value: Theme;
};

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  value,
  children,
}) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

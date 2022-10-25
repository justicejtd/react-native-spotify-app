import {useContext} from 'react';
import {ThemeContext} from '../components/atoms/providers/ThemeProvider';

const ERROR_MSG = 'userTheme must be used within an ThemeProvider';

/**
 * Check if useTheme is being used in ThemeProvider and gets the current Theme object
 * @returns {Theme} Return an instance of Theme
 */
const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(ERROR_MSG);
  }

  return themeContext;
};

export default useTheme;

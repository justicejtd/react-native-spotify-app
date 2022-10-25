import React from 'react';
import AuthProvider from './src/components/atoms/providers/AuthProvider';
import ThemeProvider from './src/components/atoms/providers/ThemeProvider';
import Navigation from './src/components/organisms/navigation/Navigation';
import appTheme from './src/theme/appTheme';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider value={appTheme}>
          <Navigation />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;

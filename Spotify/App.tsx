import React from 'react';
import Navigation from './src/components/navigation/Navigation';
import appTheme from './src/theme/appTheme';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import ThemeProvider from './src/components/providers/ThemeProvider';
import AuthProvider from './src/components/providers/AuthProvider';

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

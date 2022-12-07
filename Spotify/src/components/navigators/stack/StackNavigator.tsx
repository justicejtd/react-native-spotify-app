import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../screens/login/LoginScreen';
import routes from '../../../routes/routes';
import useAuth from '../../../hooks/auth/useAuth';
import SplashScreen from '../../../screens/splash/SplashScreen';
import TabNavigator from '../bottomTab/TabNavigator';
import {AuthContextData} from '../../providers/AuthProvider';

const Stack = createStackNavigator();
const StackNavigator: React.FC = () => {
  const {authorizeResult, isLoading}: AuthContextData = useAuth();

  return isLoading ? (
    <SplashScreen />
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {authorizeResult?.accessToken == null ? (
        <Stack.Screen name={routes.LOGIN_ROUTE} component={LoginScreen} />
      ) : (
        <Stack.Screen name={routes.MAIN_ROUTE} component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

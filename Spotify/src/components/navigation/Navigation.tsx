import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import useNavTheme from '../../theme/useNavTheme';
import StackNavigator from '../navigators/stack/StackNavigator';

const Navigation: React.FC = () => {
  const navTheme = useNavTheme();

  return (
    <NavigationContainer theme={navTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

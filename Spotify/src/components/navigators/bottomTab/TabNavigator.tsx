import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import routes from '../../../routes/routes';
import HomeScreen from '../../../screens/home/HomeScreen';
import LibraryScreen from '../../../screens/library/LibraryScreen';
import TabBarComponent from './TabBarComponent';

const Tab = createBottomTabNavigator();

const HEADER_SHOWN = false;

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={TabBarComponent}
      screenOptions={{headerShown: HEADER_SHOWN, tabBarStyle: styles.tabBar}}>
      <Tab.Screen name={routes.HOME_ROUTE} component={HomeScreen} />
      <Tab.Screen name={routes.LIBRARY_ROUTE} component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
  },
});

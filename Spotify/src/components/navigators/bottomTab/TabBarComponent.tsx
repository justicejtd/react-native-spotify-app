import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Animated, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Margin} from '../../../constants/styles/styleProps';
import SpotifyController from '../../controller/SpotifyController';

type Props = BottomTabBarProps & {
  containerStyle?: StyleProp<ViewStyle>;
  bottomTabBarStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

const TabBarComponent: React.FC<Props> = props => {
  return (
    <View>
      <SpotifyController style={styles.controller} />
      <BottomTabBar {...props} />
    </View>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  controller: {
    marginHorizontal: Margin.S,
  },
});

import React from 'react';
import {View, StyleSheet, StyleProp, ImageStyle} from 'react-native';
import Title from '../../../../components/Texts/Title';
import {Padding} from '../../../../constants/styles/styleProps';
import useGetGreetingMessage from './useGetGreetingMessage';

type Props = {
  style?: StyleProp<ImageStyle>;
};

const HomeHeader: React.FC<Props> = ({style}) => {
  const {getGreetingByCurrentTime} = useGetGreetingMessage();

  return (
    <View style={[styles.container, style]}>
      <Title>{getGreetingByCurrentTime()}</Title>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: Padding.L,
    paddingHorizontal: Padding.M,
  },
});

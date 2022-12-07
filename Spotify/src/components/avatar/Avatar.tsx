import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import IconSize from '../../constants/iconSize/IconSize';
import {Border} from '../../constants/styles/styleProps';

type Props = {
  imageUri: string;
  style?: StyleProp<ImageStyle> | undefined;
};

const Avatar: React.FC<Props> = ({imageUri: uri, style}) => {
  return <Image style={[styles.image, style]} source={{uri: uri}} />;
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    height: IconSize.M,
    width: IconSize.M,
    borderRadius: Border.Xl,
  },
});

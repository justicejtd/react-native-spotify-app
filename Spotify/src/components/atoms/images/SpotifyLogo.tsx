import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';

type Props = Pick<ImageProps, 'style'>;

const SpotifyLogo: React.FC<Props> = ({style}) => {
  return (
    <Image
      style={[styles.image, style]}
      source={require('../../../../assets/spotify-icon-white.png')}
    />
  );
};

export default SpotifyLogo;

const IMAGE_SIZE = 48;

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

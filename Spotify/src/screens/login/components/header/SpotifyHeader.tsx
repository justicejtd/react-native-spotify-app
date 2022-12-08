import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Margin} from '../../../../constants/styles/styleProps';
import SpotifyLogo from '../../../../components/images/SpotifyLogo';
import Heading1 from '../../../../components/Texts/Heading1';

const SPOTIFY_HEADER_MSG = 'Millions of songs,\nFree on Spotify.';

type Props = Pick<ViewProps, 'style'>;

const SpotifyHeader: React.FC<Props> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <SpotifyLogo style={styles.logo} />
      <Heading1 style={styles.heading}>{SPOTIFY_HEADER_MSG}</Heading1>
    </View>
  );
};

export default SpotifyHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
  },
  logo: {
    marginBottom: Margin.M,
  },
});

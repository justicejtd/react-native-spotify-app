import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import SongIconsView from '../../atoms/container/SongIconsView';
import PlaybackButton from '../../molecules/buttons/icons/PlaybackButton';
import PlayButton from '../../molecules/buttons/icons/PlayButton';
import PlayForwardButton from '../../molecules/buttons/icons/PlayForwardButton';
import LikeSongButton from '../../molecules/buttons/icons/likeSongButton/LikeSongButton';

type Props = {
  onSkipSongPress: (isForward: boolean) => void;
  onPlayPress: () => void;
  songId: string;
  isLiked: boolean;
  isPlayed: boolean;
  style?: StyleProp<ViewStyle> | undefined;
};
const SpotifyControls: React.FC<Props> = ({
  onSkipSongPress,
  onPlayPress,
  isPlayed,
  songId,
  style,
}) => {
  return (
    <SongIconsView style={[styles.container, style]}>
      <LikeSongButton songId={songId} />
      <PlaybackButton onPress={() => onSkipSongPress(false)} />
      <PlayButton onPress={onPlayPress} isPlayed={isPlayed} />
      <PlayForwardButton onPress={() => onSkipSongPress(true)} />
    </SongIconsView>
  );
};

export default SpotifyControls;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});

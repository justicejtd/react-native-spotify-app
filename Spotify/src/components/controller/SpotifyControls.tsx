import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import PlaybackButton from '../buttons/playerController/PlaybackButton';
import PlayButton from '../buttons/playerController/PlayButton';
import PlayForwardButton from '../buttons/playerController/PlayForwardButton';
import SongIconsView from '../container/SongIconsView';
import LikeSongButton from '../buttons/likeSongButton/LikeSongButton';

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

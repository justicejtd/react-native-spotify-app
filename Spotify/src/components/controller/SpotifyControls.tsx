import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import PlayPauseIconButton from '../buttons/icons/playPause/PlayIconButton';
import SongIconsView from '../container/SongIconsView';
import LikeSongButton from '../buttons/icons/like/likeSong/LikeSongButton';
import icons from '../../../assets/icons/icons';
import IconButton from '../buttons/icons/IconButton';

type Props = {
  onSkipSongPress: (isForward: boolean) => void;
  onPlayPress: () => void;
  songId: string;
  isLiked: boolean;
  isPlaying: boolean;
  style?: StyleProp<ViewStyle> | undefined;
};
const SpotifyControls: React.FC<Props> = ({
  onSkipSongPress,
  onPlayPress,
  isPlaying,
  songId,
  style,
}) => {
  return (
    <SongIconsView style={[styles.container, style]}>
      <LikeSongButton songId={songId} />
      <IconButton
        source={icons.playBackFilled}
        onPress={() => onSkipSongPress(false)}
      />
      <PlayPauseIconButton onPress={onPlayPress} isPlaying={isPlaying} />
      <IconButton
        source={icons.playForwardFilled}
        onPress={() => onSkipSongPress(true)}
      />
    </SongIconsView>
  );
};

export default SpotifyControls;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});

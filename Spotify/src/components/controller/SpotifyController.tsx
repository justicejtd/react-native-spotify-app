import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Border, Padding} from '../../constants/styles/styleProps';
import SongItem from '../songItem/SongItem';
import {Theme} from '../../theme/Theme';
import useTheme from '../../theme/useTheme';
import SpotifyControls from './SpotifyControls';
import useSpotifyControllerEvents from './hooks/useSpotifyControllerEvents';

type Props = {
  style?: StyleProp<ViewStyle>;
};
const SpotifyController: React.FC<Props> = ({style}) => {
  const theme = useTheme();
  const controllerStyles = styles(theme);
  const {onPlayPress, onSkipSongPress, playerState} =
    useSpotifyControllerEvents();

  return playerState ? (
    <View style={[controllerStyles.container, style]}>
      <SongItem
        style={controllerStyles.songItem}
        avatarStyle={controllerStyles.avatar}
        track={playerState.item}>
        <SpotifyControls
          songId={playerState.item.id}
          style={controllerStyles.controls}
          onPlayPress={onPlayPress}
          onSkipSongPress={isForward => onSkipSongPress(isForward)}
          isPlayed={playerState.is_playing}
          isLiked={false}
        />
      </SongItem>
    </View>
  ) : null;
};

export default SpotifyController;

const ICON_SIZE = 40;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      padding: Padding.S,
      height: 50,
      borderRadius: Border.M,
    },
    songItem: {
      borderRadius: 0,
    },
    avatar: {
      borderRadius: Border.M,
      height: ICON_SIZE,
      width: ICON_SIZE,
    },
    controls: {
      flex: 4,
    },
  });
};

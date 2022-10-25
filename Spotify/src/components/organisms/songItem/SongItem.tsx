import React, {PropsWithChildren} from 'react';
import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import IconSize from '../../../constants/iconSize/IconSize';
import {Border, Padding} from '../../../constants/styles/styleProps';
import Track from '../../../data/models/track/Track';
import {DEFAULT_ARTIST_NUMBER} from '../../../redux/reducers/favoriteSongs/favoriteSongsSlice';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';
import Avatar from '../../atoms/avatar/Avatar';
import SongDetails from '../../molecules/songItem/SongDetails';

const DEFAULT_IMAGE_NUMBER = 0;

type Props = {
  track: Track;
  style?: StyleProp<ViewStyle>;
  avatarStyle?: StyleProp<ImageStyle>;
  songDetailsStyle?: StyleProp<ViewStyle>;
  songIconsViewStyle?: StyleProp<ViewStyle>;
};

const SongItem: React.FC<PropsWithChildren<Props>> = ({
  track,
  style,
  avatarStyle,
  songDetailsStyle,
  children,
}) => {
  const theme = useTheme();
  const itemStyles = styles(theme);

  return (
    <View style={[itemStyles.container, style]}>
      <Avatar
        style={[itemStyles.avatar, avatarStyle]}
        imageUri={track.album.images[DEFAULT_IMAGE_NUMBER].url}
      />
      <SongDetails
        style={[itemStyles.details, songDetailsStyle]}
        songName={track.name}
        author={track.artists[DEFAULT_ARTIST_NUMBER].name}
      />
      {children}
    </View>
  );
};

export default SongItem;

const BORDER_RADIUS = Border.M;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: BORDER_RADIUS,
    },
    avatar: {
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
      borderRadius: 0,
      marginRight: Padding.M,
      height: IconSize.Xl,
      width: IconSize.Xl,
    },
    details: {
      flex: 4,
      marginRight: Padding.M,
    },
  });
};

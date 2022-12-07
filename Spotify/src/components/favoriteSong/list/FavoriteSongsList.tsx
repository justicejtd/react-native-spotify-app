import React, {PropsWithChildren} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {titlePaddingVert} from '../../../constants/favSongList/favSongList';
import {Padding, Margin} from '../../../constants/styles/styleProps';
import Song from '../../../data/models/song/Song';
import useFavSongListBottomMargin from '../../../hooks/favSongList/useFavSongListBottomMargin';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';
import LikeButton from '../../buttons/likeButton/LikeButton';
import SongIconsView from '../../container/SongIconsView';
import SongItem from '../../songItem/SongItem';
import Spacer from '../../spacer/Spacer';
import Title from '../../Texts/Title';
import useFilteredFavSongs from './useFilteredFavSongs';

const LIKED_SONGS = 'Liked Songs';
const IS_SONG_LIKED = true;

type Props = {
  onShowDialog(song: Song): void;
  style?: StyleProp<ViewStyle> | undefined;
  contentContainerStyle?: StyleProp<ViewStyle> | undefined;
};

const FavoriteSongsList: React.FC<PropsWithChildren<Props>> = ({
  style,
  onShowDialog,
  contentContainerStyle,
}) => {
  const songs = useFilteredFavSongs();
  const contentBottomMargin = useFavSongListBottomMargin();
  const theme = useTheme();
  const listStyles = styles(contentBottomMargin, theme);

  const renderItem = (item: ListRenderItemInfo<Song>) => (
    <SongItem track={item.item.track}>
      <SongIconsView style={listStyles.iconsView}>
        <LikeButton
          onPress={_ => onShowDialog(item.item)}
          isLiked={IS_SONG_LIKED}
        />
      </SongIconsView>
    </SongItem>
  );

  const renderHeader = <Title style={listStyles.title}>{LIKED_SONGS}</Title>;

  const renderSeparator = () => <Spacer style={listStyles.separator} />;

  return (
    <FlatList
      style={[listStyles.container, style]}
      contentContainerStyle={[
        listStyles.contentContainerStyle,
        contentContainerStyle,
      ]}
      data={songs}
      renderItem={renderItem}
      keyExtractor={item => item.track.id.toString()}
      ListHeaderComponent={renderHeader}
      ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderSeparator}
    />
  );
};

export default FavoriteSongsList;

const styles = (contentBottomMargin: number, {colors}: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: Padding.M,
      marginBottom: contentBottomMargin,
    },
    contentContainerStyle: {
      paddingBottom: Padding.M,
    },
    title: {
      paddingVertical: titlePaddingVert,
      color: colors.text,
    },
    separator: {
      height: Margin.S,
    },
    iconsView: {
      flex: 1,
      paddingRight: Padding.L,
    },
  });
};

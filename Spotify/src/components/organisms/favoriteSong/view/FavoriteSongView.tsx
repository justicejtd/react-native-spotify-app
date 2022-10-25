import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import FavoriteSongDialog from '../dialog/FavoriteSongDialog';
import FavoriteSongsList from '../list/FavoriteSongsList';
import useFavSongViewEvents from './useFavSongViewEvents';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const FavoriteSongView: React.FC<Props> = ({style}) => {
  const {onShowSongDialog, onToggleDialog, onDeleteFavSong} =
    useFavSongViewEvents();
  // useCallback can be used to prevent rerender
  //const fun = useCallback(onShowDialog, [setSelectedFavSong, toggleDialog]);

  return (
    <View style={style}>
      <FavoriteSongsList onShowDialog={song => onShowSongDialog(song)} />
      <FavoriteSongDialog
        onCancel={onToggleDialog}
        onApprove={onDeleteFavSong}
      />
    </View>
  );
};

export default FavoriteSongView;

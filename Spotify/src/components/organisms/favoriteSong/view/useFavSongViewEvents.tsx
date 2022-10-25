import useOnToggleDialog from '../dialog/useOnToggleDialog';
import useOnDeleteSong from '../list/useOnDeleteSong';
import useOnShowSongDialog from './useOnShowSongDialog';

const useFavSongViewEvents = () => {
  const {onShowSongDialog} = useOnShowSongDialog();
  const {onDeleteFavSong} = useOnDeleteSong();
  const {onToggleDialog} = useOnToggleDialog();

  return {onToggleDialog, onDeleteFavSong, onShowSongDialog};
};

export default useFavSongViewEvents;

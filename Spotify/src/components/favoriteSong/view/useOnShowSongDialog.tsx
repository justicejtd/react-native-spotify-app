import Song from '../../../data/models/song/Song';
import {setSelectedFavSongAction} from '../../../redux/reducers/selectedFavSong/selectedFavSongSlice';
import useAppDispatch from '../../../redux/store/useAppDispatch';
import useOnToggleDialog from '../dialog/useOnToggleDialog';

const useOnShowSongDialog = () => {
  const dispatch = useAppDispatch();
  const {onToggleDialog} = useOnToggleDialog();

  const onShowSongDialog = (song: Song) => {
    dispatch(setSelectedFavSongAction(song));
    onToggleDialog();
  };

  return {onShowSongDialog};
};

export default useOnShowSongDialog;

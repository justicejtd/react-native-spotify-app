import Song from '../../../../../data/models/song/Song';
import {useLikeSongMutation} from '../../../../../redux/api/apiSongSlice/apiSongSlice';
import {toggleUndoSnackbarAction} from '../../../../../redux/reducers/snackbar/snackbarSlice';
import useAppDispatch from '../../../../../redux/store/useAppDispatch';

const useUndoDeletedSong = () => {
  const dispatch = useAppDispatch();
  const [likeSong] = useLikeSongMutation();

  const onUndoDeletedSong = async (song: Song) => {
    await likeSong([song.track.id]);
    dispatch(toggleUndoSnackbarAction(false));
  };
  return {onUndoDeletedSong};
};

export default useUndoDeletedSong;

import {Alert} from 'react-native';
import {useUnLikeSongMutation} from '../../../../../redux/api/apiSongSlice/apiSongSlice';
import useOnToggleSnackbar from '../../../../../components/snackbar/useOnToggleSnackbar';
import useOnToggleDialog from '../dialog/useOnToggleDialog';

// Alert constants
const ALERT_TITLE = 'Error';
const ALERT_MSG = 'Something went wrong, could not delete song.';

const useOnDeleteSong = () => {
  const {onToggleSnackbar} = useOnToggleSnackbar();
  const {onToggleDialog} = useOnToggleDialog();
  const [unLikeSong] = useUnLikeSongMutation();

  const onDeleteFavSong = async (songId: string) => {
    try {
      await unLikeSong([songId]).unwrap();
      onToggleSnackbar(true);
    } catch (error) {
      console.log(error);
      Alert.alert(ALERT_TITLE, ALERT_MSG);
    } finally {
      onToggleDialog();
    }
  };

  return {onDeleteFavSong};
};

export default useOnDeleteSong;

import React, {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import useUndoDeletedSong from '../../organisms/favoriteSong/list/useOnUndoDeletedSong';
import SnackbarUndo from './SnackbarUndo';
import useOnToggleSnackbar from './useOnToggleSnackbar';

const useOnSnackbarUndoViewEvents = () => {
  const {onUndoDeletedSong} = useUndoDeletedSong();
  const {onToggleSnackbar} = useOnToggleSnackbar();

  return {onUndoDeletedSong, onToggleSnackbar};
};

type Props = {
  style?: StyleProp<ViewStyle>;
};

const SnackbarUndoView: React.FC<PropsWithChildren<Props>> = ({style}) => {
  const {onToggleSnackbar, onUndoDeletedSong} = useOnSnackbarUndoViewEvents();

  return (
    <SnackbarUndo
      snackbarStyle={style}
      onDismiss={() => onToggleSnackbar(false)}
      onPress={onUndoDeletedSong}
    />
  );
};

export default SnackbarUndoView;

import React, {PropsWithChildren} from 'react';
import {Snackbar} from 'react-native-paper';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../../constants/styles/colors';
import {Margin} from '../../../constants/styles/styleProps';
import {useSelector} from 'react-redux';
import {selectIsUndoSnackbarVisible} from '../../../redux/reducers/snackbar/snackbarSelectors';
import Song from '../../../data/models/song/Song';
import {selectSelectedFavSong} from '../../../redux/reducers/selectedFavSong/selectedFavSongSelectors';

const SNACKBAR_ACTION_TEXT = 'Undo';
const SNACKBAR_PREFIX_MSG = 'Song';
const SNACKBAR_SUFFIX_MSG = 'is deleted.';

type Props = {
  snackbarStyle?: StyleProp<ViewStyle>;
  onDismiss: () => void;
  onPress: (song: Song) => void;
};

const SnackbarUndo: React.FC<PropsWithChildren<Props>> = ({
  snackbarStyle,
  onDismiss,
  onPress,
}) => {
  const isVisible = useSelector(selectIsUndoSnackbarVisible);
  const song = useSelector(selectSelectedFavSong);

  return (
    <Snackbar
      wrapperStyle={[snackbarStyle]}
      visible={isVisible}
      onDismiss={onDismiss}
      action={{
        label: SNACKBAR_ACTION_TEXT,
        onPress: () => onPress(song),
        style: styles.action,
        color: colors.WHITE,
      }}>
      {`${SNACKBAR_PREFIX_MSG} ${song.track.name} ${SNACKBAR_SUFFIX_MSG}`}
    </Snackbar>
  );
};

export default SnackbarUndo;

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.GREEN,
    marginEnd: Margin.M,
  },
});

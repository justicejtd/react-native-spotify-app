import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {libHeaderVertPadding} from '../../../constants/libraryHeader/libraryHeader';
import {Padding} from '../../../constants/styles/styleProps';
import ScreenView from '../../atoms/container/ScreenView';
import SnackbarUndoView from '../../molecules/snackbar/SnackbarUndoView';
import FavoriteSongView from '../../organisms/favoriteSong/view/FavoriteSongView';
import LibraryHeader from '../../organisms/headers/LibraryHeader';

type Props = {style?: StyleProp<ViewStyle> | undefined};

const LibraryTemp: React.FC<Props> = ({style}) => {
  return (
    <ScreenView style={style}>
      <LibraryHeader style={styles.header} />
      <FavoriteSongView />
      <SnackbarUndoView />
    </ScreenView>
  );
};

export default LibraryTemp;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Padding.M,
    paddingVertical: libHeaderVertPadding,
  },
});

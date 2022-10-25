import Song from '../../../data/models/song/Song';
import {RootState} from '../../store/store';

export const selectSelectedFavSong = (state: RootState): Song =>
  state.selectedFavSongReducer;

import {AnyAction, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import Song from '../../../data/models/song/Song';
import songs from '../../../data/mockup/song/songs.json';

export const SELECTED_FAV_SONG_SLICE_PREFIX = 'selectedFavSong';

// InitialState needs to be initialize with some data;
const initialState: Song = songs[0];

// Reducers
const setSelectedFavSongReducer = (
  state: Song,
  action: PayloadAction<Song>,
) => {
  state = action.payload;
  return state;
};

const options = {
  name: SELECTED_FAV_SONG_SLICE_PREFIX,
  initialState,
  reducers: {
    setSelectedFavSongReducer: setSelectedFavSongReducer,
  },
};

const setSelectedFavSongSlice = createSlice(options);

// Actions
export const setSelectedFavSongAction =
  setSelectedFavSongSlice.actions.setSelectedFavSongReducer;

const selectedFavSongReducer: Reducer<Song, AnyAction> =
  setSelectedFavSongSlice.reducer;

export default selectedFavSongReducer;

import {AnyAction, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import Song from '../../../data/models/song/Song';
import cycleStateManager from '../../../utils/cycleStateManager/CylceStateManager';
import FavoriteSongsState from '../../models/favoriteSongs/FavoriteSongsState';
import SliceOptions from '../../models/slice/SliceOptions';
import {
  deleteFavSongAction,
  fetchFavSongsAction,
  undoFavSongAction,
} from './favoriteSongsActions';

export const FAV_SONG_SLICE_PREFIX = 'favoriteSongs';
export const DEFAULT_ARTIST_NUMBER = 0;

const initialState: FavoriteSongsState = {
  songs: [],
};

// Reducers
const loadFavSongsReducer = (
  state: FavoriteSongsState,
  action: PayloadAction<Song[]>,
) => {
  cycleStateManager.handleStateFulfilled(state);
  state.songs = action.payload;
};

const deleteFavSongReducer = (
  state: FavoriteSongsState,
  action: PayloadAction<string>,
) => {
  cycleStateManager.handleStateFulfilled(state);
  state.songs = state.songs.filter(song => song.track.id !== action.payload);
};

const undoFavSongReducer = (
  state: FavoriteSongsState,
  action: PayloadAction<Song>,
) => {
  cycleStateManager.handleStateFulfilled(state);
  const songs = [action.payload, ...state.songs];
  state.songs = songs;
};

const options: SliceOptions = {
  name: FAV_SONG_SLICE_PREFIX,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFavSongsAction.fulfilled, loadFavSongsReducer)
      .addCase(deleteFavSongAction.fulfilled, deleteFavSongReducer)
      .addCase(undoFavSongAction.fulfilled, undoFavSongReducer);
  },
};

const favoriteSongsSlice = createSlice(options);

const favoriteSongsReducer: Reducer<FavoriteSongsState, AnyAction> =
  favoriteSongsSlice.reducer;

export default favoriteSongsReducer;

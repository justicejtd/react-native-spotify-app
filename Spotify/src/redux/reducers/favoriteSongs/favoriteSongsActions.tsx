import {createAsyncThunk} from '@reduxjs/toolkit';
import {songRepo} from '../../../data/api/services/song/repo/SongRepoImpl';
import Song from '../../../data/models/song/Song';
import {FAV_SONG_SLICE_PREFIX} from './favoriteSongsSlice';

const FETCH_FAV_SONG_PREFIX = `${FAV_SONG_SLICE_PREFIX}/fetchFavoriteSongs`;
const DELETE_FAV_SONG_PREFIX = `${FAV_SONG_SLICE_PREFIX}/deleteFavoriteSong`;
const UNDO_FAV_SONG_PREFIX = `${FAV_SONG_SLICE_PREFIX}/undoFavoriteSong`;

// Action creator thunks
const fetchFavSongs = async () => {
  const favSongs = await songRepo.getLikedSongs();
  return favSongs;
};

const deleteFavSongs = async (songId: string) => {
  await songRepo.deleteLikedSong(songId);
  return songId;
};

const undoFavSong = async (song: Song) => {
  await songRepo.saveLikedSong(song.track.id);
  return song;
};

// Action creators
export const fetchFavSongsAction = createAsyncThunk(
  FETCH_FAV_SONG_PREFIX,
  fetchFavSongs,
);

export const deleteFavSongAction = createAsyncThunk(
  DELETE_FAV_SONG_PREFIX,
  deleteFavSongs,
);

export const undoFavSongAction = createAsyncThunk(
  UNDO_FAV_SONG_PREFIX,
  undoFavSong,
);

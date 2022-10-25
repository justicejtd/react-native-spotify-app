import {RootState} from '../../store/store';
import {selectSearchValue} from '../search/searchSlice';
import {DEFAULT_ARTIST_NUMBER} from './favoriteSongsSlice';

export const selectFavoriteSongs = (state: RootState) =>
  state.favoriteSongsReducer.songs;

export const selectFilteredFavSongs = (state: RootState) => {
  const favoriteSongs = selectFavoriteSongs(state);
  const searchValue = selectSearchValue(state).toUpperCase();

  return favoriteSongs.filter(song => {
    const songName = song.track.name.toUpperCase();
    const songArtist =
      song.track.artists[DEFAULT_ARTIST_NUMBER].name.toUpperCase();
    return songName.includes(searchValue) || songArtist.includes(searchValue);
  });
};

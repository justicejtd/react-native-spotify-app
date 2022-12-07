import {useSelector} from 'react-redux';
import {useGetLikedSongsQuery} from '../../../../../redux/api/apiSongSlice/apiSongSlice';
import {DEFAULT_ARTIST_NUMBER} from '../../../../../redux/reducers/favoriteSongs/favoriteSongsSlice';
import {selectSearchValue} from '../../../../../redux/reducers/search/searchSlice';

const useFilteredFavSongs = () => {
  const {data: favSongs} = useGetLikedSongsQuery();
  const searchValue = useSelector(selectSearchValue).toUpperCase();

  return favSongs?.items.filter(song => {
    const songName = song.track.name.toUpperCase();
    const songArtist =
      song.track.artists[DEFAULT_ARTIST_NUMBER].name.toUpperCase();
    return songName.includes(searchValue) || songArtist.includes(searchValue);
  });
};

export default useFilteredFavSongs;

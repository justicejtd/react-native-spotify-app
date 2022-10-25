import Song from '../../../data/models/song/Song';
import SliceState from '../slice/SliceState';

type FavoriteSongsState = {
  songs: Song[];
} & SliceState;

export default FavoriteSongsState;

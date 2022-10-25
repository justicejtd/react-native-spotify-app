import Song from '../song/Song';
interface LikedSongsResponse {
  href: string;
  items: Song[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export default LikedSongsResponse;

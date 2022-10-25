import Artist from '../artist/Artist';
import {ExternalUrl} from '../external/ExternalUrl';
import Image from '../image/Image';

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export default Album;

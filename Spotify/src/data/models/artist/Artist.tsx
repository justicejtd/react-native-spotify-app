import {ExternalUrl} from '../response/LikedSongsResponse';

interface Artist {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export default Artist;

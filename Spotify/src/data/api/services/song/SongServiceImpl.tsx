import LikedSongsResponse from '../../../models/response/LikedSongsResponse';
import Song from '../../../models/song/Song';
import {apiClient} from '../../base';
import SongService from './SongService';

const TRACK_URL = 'me/tracks';
const CONTAINS_URL = `${TRACK_URL}/contains`;
const CHECK_lIKED_TRACKS_QUERY = '?ids=';
class SongServiceImpl implements SongService {
  async getLikedSongs(): Promise<Song[]> {
    try {
      const response: LikedSongsResponse = await apiClient
        .get(TRACK_URL)
        .json();
      const songs = response.items;
      return songs;
    } catch (error) {
      throw error;
    }
  }

  async deleteLikedSong(songId: string): Promise<void> {
    try {
      const body = this.createSongIdBody([songId]);
      await apiClient.delete(TRACK_URL, {body: body});
    } catch (error) {
      throw error;
    }
  }

  async saveLikedSong(songId: string): Promise<void> {
    try {
      const body = this.createSongIdBody([songId]);
      await apiClient.put(TRACK_URL, {
        body: body,
      });
    } catch (error) {
      throw error;
    }
  }

  async checkLikedTracks(songIds: string[]): Promise<boolean[]> {
    try {
      const url = `${CONTAINS_URL}${CHECK_lIKED_TRACKS_QUERY}${songIds}`;
      const songsLikedStatus: boolean[] = await apiClient.get(url).json();
      return songsLikedStatus;
    } catch (error) {
      throw error;
    }
  }

  createSongIdBody(ids: string[]): string {
    return JSON.stringify({ids: ids});
  }
}

export default SongServiceImpl;

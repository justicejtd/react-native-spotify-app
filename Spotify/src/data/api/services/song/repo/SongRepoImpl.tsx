import SongRepo from './SongRepo';
import SongService from '../SongService';
import SongServiceImpl from '../SongServiceImpl';

class SongRepoImpl implements SongRepo {
  constructor(private songService: SongService) {}

  getLikedSongs() {
    return this.songService.getLikedSongs();
  }

  deleteLikedSong(songId: string) {
    return this.songService.deleteLikedSong(songId);
  }

  saveLikedSong(songId: string) {
    return this.songService.saveLikedSong(songId);
  }

  checkLikedTracks(songIds: string[]) {
    return this.songService.checkLikedTracks(songIds);
  }
}

export const songRepo: SongRepo = new SongRepoImpl(new SongServiceImpl());

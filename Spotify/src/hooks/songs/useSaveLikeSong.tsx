import {songRepo as SongRepo} from '../../data/api/services/song/repo/SongRepoImpl';

const useSaveLikeSong = () => {
  const saveLikedSong = async (songId: string) => {
    try {
      await SongRepo.saveLikedSong(songId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return saveLikedSong;
};

export default useSaveLikeSong;

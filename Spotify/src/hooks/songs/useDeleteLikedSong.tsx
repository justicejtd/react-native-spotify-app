import {songRepo as SongRepo} from '../../data/api/services/song/repo/SongRepoImpl';

const useDeleteLikedSong = () => {
  const deleteLikedSong = async (songId: string) => {
    try {
      await SongRepo.deleteLikedSong(songId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return deleteLikedSong;
};

export default useDeleteLikedSong;

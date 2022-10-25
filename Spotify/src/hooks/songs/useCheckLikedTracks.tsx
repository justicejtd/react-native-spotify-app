import {songRepo as SongRepo} from '../../data/api/services/song/repo/SongRepoImpl';

const useCheckLikedTracks = () => {
  const checkLikedTracks = async (songIds: string[]) => {
    try {
      const isLikedFetchedSongs: boolean[] = await SongRepo.checkLikedTracks(
        songIds,
      );
      return isLikedFetchedSongs;
    } catch (error) {
      console.error(error);
    }
  };

  return checkLikedTracks;
};

export default useCheckLikedTracks;

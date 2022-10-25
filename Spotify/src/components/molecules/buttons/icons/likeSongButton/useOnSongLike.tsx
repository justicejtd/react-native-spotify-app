import {
  useCheckLikedTracksQuery,
  useLikeSongMutation,
  useUnLikeSongMutation,
} from '../../../../../redux/api/apiSongSlice/apiSongSlice';

const DEFAULT_LIKE_SONG_INDEX = 0;

const useOnSongLike = (
  songId: string,
): [boolean, (songId: string) => Promise<void>] => {
  const songIds = [songId];
  const [likeSongs] = useLikeSongMutation();
  const [unlikeSongs] = useUnLikeSongMutation();
  const {data: likedTracksChecks} = useCheckLikedTracksQuery(songIds);

  const getIsSongLiked = () =>
    likedTracksChecks ? likedTracksChecks[DEFAULT_LIKE_SONG_INDEX] : false;

  const onSongsLike = async () => {
    getIsSongLiked() ? await unlikeSongs(songIds) : await likeSongs(songIds);
  };

  return [getIsSongLiked(), onSongsLike];
};

export default useOnSongLike;

import {
  useGetPlayerStateQuery,
  usePausePlaybackMutation,
  usePreviousPlaybackMutation,
  useNextPlaybackMutation,
  useResumePlaybackMutation,
} from '../../../redux/api/apiPlayerSlice/apiPlayerSlice';

const useSpotifyControllerEvents = () => {
  const {data: playerState} = useGetPlayerStateQuery();
  const [pausePlayback] = usePausePlaybackMutation();
  const [previousPlayback] = usePreviousPlaybackMutation();
  const [nextPlayback] = useNextPlaybackMutation();
  const [resumePlayback] = useResumePlaybackMutation();

  const onPlayPress = async () => {
    try {
      playerState?.is_playing ? await pausePlayback() : await resumePlayback();
    } catch (error) {
      console.error(error);
    }
  };

  const onSkipSongPress = async (isForward: boolean) => {
    try {
      isForward ? await nextPlayback() : await previousPlayback();
    } catch (error) {
      console.error(error);
    }
  };

  return {onPlayPress, onSkipSongPress, playerState};
};

export default useSpotifyControllerEvents;

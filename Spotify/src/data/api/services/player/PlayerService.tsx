import {ResponsePromise} from 'ky';

interface PlayerService {
  /**
   * Get information about the user’s current playback state,
   * including track or episode, progress, and active device.
   * @returns Returns a ResponsePromise.
   */
  getPlaybackState(): ResponsePromise;

  /**
   * Pause playback on the user's account.
   * @returns Returns a ResponsePromise.
   */
  pausePlayback(): ResponsePromise;

  /**
   * Resume current playback on the user's active device.
   * @returns Returns a ResponsePromise.
   */
  resumePlayback(): ResponsePromise;

  /**
   * Skips to next track in the user’s queue.
   * @returns Returns a ResponsePromise.
   */
  nextPlayback(): ResponsePromise;

  /**
   * Skips to previous track in the user’s queue.
   * @returns Returns a ResponsePromise.
   */
  previousPlayback(): ResponsePromise;
}

export default PlayerService;

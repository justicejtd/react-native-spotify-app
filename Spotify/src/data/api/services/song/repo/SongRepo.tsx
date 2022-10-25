import Song from '../../../../models/song/Song';

interface SongRepo {
  /**
   * Get list of liked songs.
   * @returns Returns a Promise that includes an list of Song objects.
   */
  getLikedSongs(): Promise<Song[]>;

  /**
   * Delete a liked song based on the song id.
   * @param songId Id of the song that will be removed.
   * @returns Returns a Promise that includes a delete response message.
   */
  deleteLikedSong(songId: string): Promise<void>;

  /**
   * Save a song to my library.
   * @param songId Id of the song that will be liked.
   * @returns Returns a Promise that includes a save response message.
   */
  saveLikedSong(songId: string): Promise<void>;

  /**
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
   * @param songId list of ids of the songs that will be checked if it is liked or not.
   * @returns Returns a Promise that includes a list of boolean values.
   */
  checkLikedTracks(songIds: string[]): Promise<boolean[]>;
}

export default SongRepo;

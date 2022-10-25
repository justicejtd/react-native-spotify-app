/**
 * The Spotify Api Scopes as defined in
 **/
enum ApiScope {
  /**
   * Read access to user’s private playlists.
   */
  PlaylistReadPrivate = 'playlist-read-private',
  /**
   * Include collaborative playlists when requesting a user’s playlists.
   */
  PlaylistReadCollaborative = 'playlist-read-collaborative',
  /**
   * Write access to a user’s public playlists.
   */
  PlaylistModifyPublic = 'playlist-modify-public',
  /**
   * Write access to a user’s private playlists.
   */
  PlaylistModifyPrivate = 'playlist-modify-private',
  /**
   * Read access to the list of artists and other users that the user follows.
   */
  UserFollowRead = 'user-follow-read',
  /**
   * Write/delete access to the list of artists and other users that the user follows.
   */
  UserFollowModify = 'user-follow-modify',
  /**
   * Read access to a user’s “Your Music” library.
   */
  UserLibraryRead = 'user-library-read',
  /**
   * Write/delete access to a user’s “Your Music” library.
   */
  UserLibraryModify = 'user-library-modify',
  /**
   * Read access to the user’s birth date.  (iOS)
   */
  UserReadBirthDate = 'user-read-birth-date',
  /**
   * Read access to user’s email address.
   */
  UserReadEmail = 'user-read-email',
  /**
   * Read access to user’s subscription details (type of user account).
   */
  UserReadPrivate = 'user-read-private',
  /**
   * Read access to a user’s top artists and tracks.
   */
  UserTopRead = 'user-top-read',
  /**
   * Upload user generated content images
   */
  UGCImageUpload = 'ugc-image-upload',
  /**
   * Control playback of a Spotify track.
   */
  Streaming = 'streaming',
  /**
   * Use App Remote to control playback in the Spotify app
   */
  AppRemoteControl = 'app-remote-control',
  /**
   * Read access to a user’s player state.
   */
  UserReadPlaybackState = 'user-read-playback-state',
  /**
   * Read access to a user’s playback position. (android)
   */
  UserReadPlaybackPosition = 'user-read-playback-position',
  /**
   * Write access to a user’s playback state
   */
  UserModifyPlaybackState = 'user-modify-playback-state',
  /**
   * Read access to a user’s currently playing track
   */
  UserReadCurrentlyPlaying = 'user-read-currently-playing',
  /**
   * Read access to a user’s currently playing track
   */
  UserReadRecentlyPlayed = 'user-read-recently-played',
}

export default ApiScope;

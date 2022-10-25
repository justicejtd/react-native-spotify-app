import LikedSongsResponse from '../../../data/models/response/LikedSongsResponse';
import rtkApi, {LIST_TAG as LIST_TAG_ID, SONG_TAG} from '../apiSlice';
import HttpMethods from '../enums/HttpMethods';

// Urls
const TRACK_URL = 'me/tracks';
const CHECK_LIKED_TRACKS_URL = `${TRACK_URL}/contains`;
const CHECK_lIKED_TRACKS_QUERY = '?ids=';

// Tags
const LIKED_SONG_TAG_ID = 'LikedSong';

const apiSongSlice = rtkApi.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getLikedSongs: builder.query<LikedSongsResponse, void>({
      query: () => TRACK_URL,
      providesTags: [{type: SONG_TAG, id: LIST_TAG_ID}],
    }),
    checkLikedTracks: builder.query<boolean[], string[]>({
      query: ids =>
        `${CHECK_LIKED_TRACKS_URL}${CHECK_lIKED_TRACKS_QUERY}${ids}`,
      providesTags: [{type: SONG_TAG, id: LIKED_SONG_TAG_ID}],
    }),
    likeSong: builder.mutation<void, string[]>({
      query: ids => ({
        url: TRACK_URL,
        method: HttpMethods.PUT,
        body: ids,
      }),
      invalidatesTags: [{type: SONG_TAG, id: LIKED_SONG_TAG_ID}],
    }),
    unLikeSong: builder.mutation<void, string[]>({
      query: ids => ({
        url: TRACK_URL,
        method: HttpMethods.DELETE,
        body: ids,
      }),
      invalidatesTags: [{type: SONG_TAG, id: LIKED_SONG_TAG_ID}],
    }),
  }),
});

export const {
  useGetLikedSongsQuery,
  useCheckLikedTracksQuery,
  useLikeSongMutation,
  useUnLikeSongMutation,
} = apiSongSlice;

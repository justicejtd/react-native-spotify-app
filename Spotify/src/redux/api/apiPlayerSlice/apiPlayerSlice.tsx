import PlayerStateResponse from '../../../data/models/response/PlayerStateResponse';
import rtkApi, {PLAYER_TAG} from '../apiSlice';
import HttpMethods from '../enums/HttpMethods';

// Urls
const PLAYER_URL: string = 'me/player';
const PAUSE_URL = `${PLAYER_URL}/pause`;
const RESUME_URL = `${PLAYER_URL}/play`;
const NEXT_URL = `${PLAYER_URL}/next`;
const PREVIOUS_URL = `${PLAYER_URL}/previous`;

// Tags
const PLAYER_STATE_TAG_ID = 'PlayerStateId';

const apiPlayerSlice = rtkApi.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getPlayerState: builder.query<PlayerStateResponse, void>({
      query: () => PLAYER_URL,
      providesTags: [{type: PLAYER_TAG, id: PLAYER_STATE_TAG_ID}],
    }),
    pausePlayback: builder.mutation<void, void>({
      query: () => ({
        url: PAUSE_URL,
        method: HttpMethods.PUT,
      }),
      invalidatesTags: [{type: PLAYER_TAG, id: PLAYER_STATE_TAG_ID}],
    }),
    resumePlayback: builder.mutation<void, void>({
      query: () => ({
        url: RESUME_URL,
        method: HttpMethods.PUT,
      }),
      invalidatesTags: [{type: PLAYER_TAG, id: PLAYER_STATE_TAG_ID}],
    }),
    nextPlayback: builder.mutation<void, void>({
      query: () => ({
        url: NEXT_URL,
        method: HttpMethods.POST,
      }),
      invalidatesTags: [{type: PLAYER_TAG, id: PLAYER_STATE_TAG_ID}],
    }),
    previousPlayback: builder.mutation<void, void>({
      query: () => ({
        url: PREVIOUS_URL,
        method: HttpMethods.POST,
      }),
      invalidatesTags: [{type: PLAYER_TAG, id: PLAYER_STATE_TAG_ID}],
    }),
  }),
});

export const {
  useGetPlayerStateQuery,
  usePausePlaybackMutation,
  usePreviousPlaybackMutation,
  useNextPlaybackMutation,
  useResumePlaybackMutation,
} = apiPlayerSlice;

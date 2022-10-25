import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {RefreshResult} from 'react-native-app-auth';
import Config from 'react-native-config';
import authRepo from '../../data/api/services/auth/repo/AuthRepoImpl';
import {tokenManager} from '../../utils/tokenManager/TokenManagerImpl';

const REDUCER_PATH = 'spotifyApi';
const AUTHORIZATION = 'Authorization';
const BEARER = 'Bearer';

// Tags
export const LIST_TAG = 'List';
export const SONG_TAG = 'Song';
export const PLAYER_TAG = 'Player';

const setAuthorization = async (headers: Headers) => {
  const token = await tokenManager.getToken(); // Get token from storage
  headers.set(AUTHORIZATION, `${BEARER} ${token}`); // Set token to header
};

const baseQuery = fetchBaseQuery({
  baseUrl: Config.BASE_URL,
  prepareHeaders: async (headers, {}) => {
    await setAuthorization(headers);
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Try to get a new token
    await authRepo.updateToken();
    // Retry the initial query
    result = await baseQuery(args, api, extraOptions);
    // Missing logout if re-authentication didn't work
  }
  return result;
};

const rtkApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: baseQueryWithReAuth,
  tagTypes: [SONG_TAG, PLAYER_TAG],
  endpoints: () => ({}),
});

export default rtkApi;

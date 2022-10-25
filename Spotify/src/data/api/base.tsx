import ky from 'ky';
import {RefreshResult} from 'react-native-app-auth';
import {tokenManager} from '../../utils/tokenManager/TokenManagerImpl';
import authRepo from './services/auth/repo/AuthRepoImpl';
import Config from 'react-native-config';
import ApiScope from '../api/enums/ApiScope';

// Authentication configuration details
const AUTH_URL = '/authorize';
const TOKEN_URL = '/api/token';
const AUTHORIZATION = 'Authorization';
const BEARER = 'Bearer';

// Response code
export const CODE_UNAUTHORIZED = 401;

const checkAuthorization = async (request: Request, response: Response) => {
  // Check if user is unauthorized and then update token
  if (response.status === CODE_UNAUTHORIZED) {
    const _refreshResult: RefreshResult = await authRepo.updateToken();
    request.headers.set(
      AUTHORIZATION,
      `${BEARER} ${_refreshResult.accessToken}`,
    );
    return ky(request);
  }
};

const setAuthorization = async (request: Request) => {
  const token = await tokenManager.getToken(); // Get token from storage
  request.headers.set(AUTHORIZATION, `${BEARER} ${token}`); // Set token to header
};

export const apiClient = ky.create({
  prefixUrl: Config.BASE_URL,
  hooks: {
    beforeRequest: [async request => setAuthorization(request)],
    afterResponse: [
      async (request, _, response) => checkAuthorization(request, response),
    ],
  },
});

export const authConfig = {
  clientId: Config.CLIENT_ID,
  clientSecret: Config.CLIENT_SECRET,
  redirectUrl: Config.REDIRECT_URL,
  scopes: [
    ApiScope.UserReadRecentlyPlayed,
    ApiScope.UserReadPrivate,
    ApiScope.UserReadEmail,
    ApiScope.UserReadPlaybackState,
    ApiScope.UserModifyPlaybackState,
    ApiScope.UserReadCurrentlyPlaying,
    ApiScope.Streaming,
    ApiScope.UserTopRead,
    ApiScope.UserLibraryRead,
    ApiScope.UserLibraryModify,
    ApiScope.PlaylistModifyPublic,
  ],
  serviceConfiguration: {
    authorizationEndpoint: `${Config.BASE_AUTH_URL}${AUTH_URL}`,
    tokenEndpoint: `${Config.BASE_AUTH_URL}${TOKEN_URL}`,
  },
};

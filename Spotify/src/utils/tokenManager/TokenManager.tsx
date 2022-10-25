import {RefreshResult} from 'react-native-app-auth';

interface TokenManager {
  /**
   * Returns authorization token value.
   * @Return Authorization token
   */
  getToken(): Promise<string>;

  /**
   * Returns refresh token value.
   * @Return Refresh token
   */
  getRefreshToken(): Promise<string>;

  /**
   * Update current access and refresh tokens
   * @param refreshResult Contains old refresh and access token which is received after requesting a new refresh token form the API.
   * @Return Promise<void>
   */
  updateToken(refreshResult: RefreshResult): Promise<void>;
}

export default TokenManager;

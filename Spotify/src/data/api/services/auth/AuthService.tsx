import {authConfig} from '../../base';
import {
  authorize,
  AuthorizeResult,
  refresh,
  RefreshResult,
} from 'react-native-app-auth';
import {tokenManager} from '../../../../utils/tokenManager/TokenManagerImpl';

export type AuthData = {
  access_token: string;
  refresh_token: string;
  email: string;
};

interface AuthService {
  /**
   * Authenticates user.
   * @returns Returns a Promise which includes the AuthorizeResult object.
   */
  signIn(): Promise<AuthorizeResult>;

  /**
   * Gets a new refresh token.
   * @returns Returns a Promise which includes the RefreshResult object.
   */
  updateToken(): Promise<RefreshResult>;
}

const signIn = async (): Promise<AuthorizeResult> => {
  return await authorize(authConfig);
};

const updateToken = async () => {
  const oldRefreshToken: string = await tokenManager.getRefreshToken();
  const refreshResult: RefreshResult = await refresh(authConfig, {
    refreshToken: oldRefreshToken,
  });

  return refreshResult;
};

// It's not clear between const or classes
const authService: AuthService = {
  signIn: signIn,
  updateToken: updateToken,
};

export default authService;

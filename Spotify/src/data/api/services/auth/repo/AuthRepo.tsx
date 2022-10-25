import {AuthorizeResult, RefreshResult} from 'react-native-app-auth';

interface AuthRepo {
  /**
   * Invokes AuthService to authenticate user.
   * @returns Returns a Promise which includes the AuthorizeResult object.
   */
  signIn(): Promise<AuthorizeResult>;

  /**
   * Gets a new refresh token.
   * @returns Returns a Promise which includes the RefreshResult object.
   */
  updateToken(): Promise<RefreshResult>;
}

export default AuthRepo;

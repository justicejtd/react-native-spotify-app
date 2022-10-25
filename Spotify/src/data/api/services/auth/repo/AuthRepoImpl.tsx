import AuthRepo from './AuthRepo';
import {AuthorizeResult, RefreshResult} from 'react-native-app-auth';
import authService from '../AuthService';
import {tokenManager} from '../../../../../utils/tokenManager/TokenManagerImpl';

class AuthRepoImpl implements AuthRepo {
  signIn(): Promise<AuthorizeResult> {
    return authService.signIn();
  }

  async updateToken(): Promise<RefreshResult> {
    const refreshResult = await authService.updateToken();
    await tokenManager.updateToken(refreshResult);
    return refreshResult;
  }
}

const authRepo: AuthRepo = new AuthRepoImpl();

export default authRepo;

import {RefreshResult} from 'react-native-app-auth';
import {authResultManager} from '../authorizeResultManager/AuthResultManager';
import TokenManager from './TokenManager';

class TokenManagerImpl implements TokenManager {
  async getToken(): Promise<string> {
    const authResult = await authResultManager.getAuthResult();

    return authResult ? authResult.accessToken : '';
  }

  async getRefreshToken(): Promise<string> {
    const authResult = await authResultManager.getAuthResult();

    return authResult ? authResult.refreshToken : '';
  }

  async updateToken(refreshResult: RefreshResult): Promise<void> {
    await authResultManager.updateAuthResult(refreshResult);
  }
}

export default TokenManagerImpl;

export const tokenManager: TokenManager = new TokenManagerImpl();

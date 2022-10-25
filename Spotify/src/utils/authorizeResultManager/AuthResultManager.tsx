import {AuthorizeResult, RefreshResult} from 'react-native-app-auth';
import EncryptedStorage from 'react-native-encrypted-storage';

interface AuthResultManager {
  getAuthResult(): Promise<AuthorizeResult | null>;
  saveAuthResult(authResult: AuthorizeResult): Promise<void>;
  deleteAuthResult(): Promise<void>;
  updateAuthResult(refreshResult: RefreshResult): Promise<void>;
}

const AUTH_RESULT_KEY = 'Auth Result Key';

class AuthResultManagerImpl implements AuthResultManager {
  async getAuthResult(): Promise<AuthorizeResult | null> {
    // Get data from persistent storage
    const authResultSerialized = await EncryptedStorage.getItem(
      AUTH_RESULT_KEY,
    );

    if (authResultSerialized) {
      const authResult: AuthorizeResult = JSON.parse(authResultSerialized);
      return authResult;
    }
    return null;
  }

  async saveAuthResult(authResult: AuthorizeResult): Promise<void> {
    const data = JSON.stringify(authResult);

    //Persist the data in the persistent storage
    await EncryptedStorage.setItem(AUTH_RESULT_KEY, data);
  }

  async deleteAuthResult(): Promise<void> {
    await EncryptedStorage.removeItem(AUTH_RESULT_KEY);
  }

  async updateAuthResult(refreshResult: RefreshResult): Promise<void> {
    const oldAuthResult: AuthorizeResult | null = await this.getAuthResult();

    if (oldAuthResult) {
      const refreshToken = refreshResult.refreshToken;

      const updatedAuthResult: AuthorizeResult = {
        ...oldAuthResult,
        accessToken: refreshResult.accessToken,
        refreshToken: refreshToken ? refreshToken : '',
        accessTokenExpirationDate: refreshResult.accessTokenExpirationDate,
        tokenAdditionalParameters: refreshResult.additionalParameters,
        idToken: refreshResult.idToken,
        tokenType: refreshResult.tokenType,
      };
      await this.saveAuthResult(updatedAuthResult);
    }
  }
}

export const authResultManager = new AuthResultManagerImpl();

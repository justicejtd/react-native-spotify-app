import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {AuthorizeResult} from 'react-native-app-auth';
import authRepo from '../../../data/api/services/auth/repo/AuthRepoImpl';
import {authResultManager} from '../../../utils/authorizeResultManager/AuthResultManager';

export type AuthContextData = {
  authorizeResult?: AuthorizeResult;
  isLoading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [authorizeResult, setAuthorizeResult] = useState<AuthorizeResult>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Storage
  const [isLoading, setLoading] = useState(true);

  const signIn = async () => {
    try {
      setLoading(true);

      // Call sign service
      const _authorizeResult = await authRepo.signIn();
      await authResultManager.saveAuthResult(_authorizeResult);

      setAuthorizeResult(_authorizeResult);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    //Remove data from context
    setAuthorizeResult(undefined);

    //Remove the data from persistent storage
    await authResultManager.deleteAuthResult();
  };

  const authContextData: AuthContextData = {
    authorizeResult: authorizeResult,
    isLoading,
    signIn,
    signOut,
  };

  async function loadStorageData(): Promise<void> {
    try {
      // Get data from persistent storage
      const authResult = await authResultManager.getAuthResult();

      if (authResult) {
        setAuthorizeResult(authResult);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import {useContext} from 'react';
import {
  AuthContext,
  AuthContextData,
} from '../../components/atoms/providers/AuthProvider';

const ERROR_MSG = 'useAuth must be used within an AuthProvider';

/**
 * Check if useAuth is being used in AuthProvider and gets the current AuthContextData
 * @returns {AuthContextData} Return an instance of AuthContextData
 */
const useAuth = (): AuthContextData => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(ERROR_MSG);
  }

  return authContext;
};

export default useAuth;

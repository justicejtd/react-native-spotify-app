import React from 'react';
import ScreenView from '../../atoms/container/ScreenView';
import {StyleSheet} from 'react-native';
import {Padding} from '../../../constants/styles/styleProps';
import SpotifyHeader from '../../molecules/headers/SpotifyHeader';
import LoginForm from '../../organisms/forms/LoginForm';

const LoginTemp: React.FC = () => {
  return (
    <ScreenView>
      <SpotifyHeader style={styles.header} />
      <LoginForm style={styles.form} />
    </ScreenView>
  );
};

export default LoginTemp;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 1.5,
    justifyContent: 'flex-start',
    paddingHorizontal: Padding.M,
  },
});

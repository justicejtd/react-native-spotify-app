import React from 'react';
import {StyleSheet} from 'react-native';
import {Padding} from '../../constants/styles/styleProps';
import SpotifyHeader from '../../components/headers/SpotifyHeader';
import ScreenView from '../../components/container/ScreenView';
import LoginForm from '../../components/forms/LoginForm';

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

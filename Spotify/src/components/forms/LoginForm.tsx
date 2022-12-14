import React, {useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import useAuth from '../../hooks/auth/useAuth';
import FlatButton from '../buttons/flat/FlatButton';
import LabelInputField from '../Inputs/LabelInputField';
import {AuthContextData} from '../providers/AuthProvider';

const LABEL_EMAIL: string = 'Email';
const LABEL_PASSWORD: string = 'Password';
const PLACEHOLDER_EMAIL: string = 'example@hotmail.com';
const LABEL_LOGIN = 'LOGIN';

type Props = {style: StyleProp<ViewStyle> | undefined};

const LoginForm: React.FC<Props> = ({style}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContextData: AuthContextData = useAuth();

  const signIn = async () => {
    await authContextData.signIn();
  };

  return (
    <View style={style}>
      <LabelInputField
        containerStyle={styles.emailField}
        label={LABEL_EMAIL}
        onChangeText={setEmail}
        value={email}
        placeholder={PLACEHOLDER_EMAIL}
      />
      <LabelInputField
        containerStyle={styles.passwordField}
        label={LABEL_PASSWORD}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <FlatButton
        buttonStyle={styles.button}
        label={LABEL_LOGIN}
        onPress={signIn}
      />
    </View>
  );
};

export default LoginForm;

const MARGIN_BOTTOM: number = 20;

const styles = StyleSheet.create({
  emailField: {
    marginBottom: MARGIN_BOTTOM,
  },
  passwordField: {
    marginBottom: MARGIN_BOTTOM,
  },
  button: {
    alignSelf: 'center',
  },
});

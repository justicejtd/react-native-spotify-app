import FlatButton from '../buttons/flat/FlatButton';
import React from 'react';
import {View} from 'react-native';
import TextButton from '../buttons/text/TextButton';

export type Button = {
  label: string;
  onPress(): void;
};

type Props = {
  buttonApprove: Button;
  buttonReject: Button;
};

const DialogButtons: React.FC<Props> = ({buttonApprove, buttonReject}) => {
  return (
    <View>
      <FlatButton label={buttonApprove.label} onPress={buttonApprove.onPress} />
      <TextButton label={buttonReject.label} onPress={buttonReject.onPress} />
    </View>
  );
};

export default DialogButtons;

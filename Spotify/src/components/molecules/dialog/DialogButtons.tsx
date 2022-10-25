import FlatButton from '../buttons/custom/FlatButton';
import React from 'react';
import {View} from 'react-native';
import TextButton from '../buttons/custom/TextButton';

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

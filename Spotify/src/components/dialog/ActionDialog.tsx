import {Padding} from '../../constants/styles/styleProps';
import React from 'react';
import {StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';
import DialogButtons, {Button} from './DialogButtons';

type Props = {
  title: string;
  description?: string;
  visible?: boolean;
  buttonApprove: Button;
  buttonReject: Button;
  verticalButtons?: boolean | undefined;
};

const ActionDialog: React.FC<Props> = ({
  title,
  description,
  visible,
  buttonApprove,
  buttonReject,
  verticalButtons,
}) => {
  return (
    <Dialog.Container
      contentStyle={styles.container}
      visible={visible}
      verticalButtons={verticalButtons}>
      <Dialog.Title style={styles.title}>{title}</Dialog.Title>
      <Dialog.Description style={styles.description}>
        {description}
      </Dialog.Description>
      <DialogButtons
        buttonApprove={{
          label: buttonApprove.label,
          onPress: buttonApprove.onPress,
        }}
        buttonReject={{
          label: buttonReject.label,
          onPress: buttonReject.onPress,
        }}
      />
    </Dialog.Container>
  );
};

export default ActionDialog;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Padding.M,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    padding: Padding.M,
  },
});

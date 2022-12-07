import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Title from '../Texts/Title';
import InputField, {FormFieldProps} from './InputField';

type Props = {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: StyleProp<ViewStyle> | undefined;
  label: string;
} & Pick<
  FormFieldProps,
  'onChangeText' | 'value' | 'placeholder' | 'secureTextEntry'
>;

const LabelInputField: React.FC<Props> = ({
  containerStyle,
  labelStyle,
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Title style={labelStyle}>{label}</Title>
      <InputField
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default LabelInputField;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
});

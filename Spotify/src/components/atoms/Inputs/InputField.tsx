import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Border} from '../../../constants/styles/styleProps';
import {Theme} from '../../../theme/Theme';
import useTheme from '../../../theme/useTheme';

export type FormFieldProps = Pick<
  TextInputProps,
  'style' | 'onChangeText' | 'value' | 'placeholder' | 'secureTextEntry'
>;

const InputField: React.FC<FormFieldProps> = ({
  style,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
}) => {
  const theme = useTheme();
  const fieldStyles = styles(theme);

  return (
    <TextInput
      style={[fieldStyles.input, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;

const styles = ({colors}: Theme) => {
  return StyleSheet.create({
    input: {
      width: '100%',
      backgroundColor: colors.surface,
      color: colors.text,
      borderRadius: Border.M,
    },
  });
};

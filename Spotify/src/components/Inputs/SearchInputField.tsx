import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {Border, Padding, Margin} from '../../constants/styles/styleProps';
import SearchIcon from '../icons/search/SearchIcon';
import InputField from './InputField';

type Props = {
  style?: StyleProp<ViewStyle> | undefined;
  placeholder?: string | undefined;
  onChangeText?: (text: string) => void;
  value: string;
};

const SearchInputField: React.FC<Props> = ({
  style,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      <SearchIcon style={styles.icon} />
      <InputField
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

export default SearchInputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: Border.M,
    paddingHorizontal: Padding.S,
  },
  input: {
    backgroundColor: 'transparent',
    marginStart: Margin.Xs,
    color: colors.BLACK,
  },
  icon: {
    color: colors.BLACK,
  },
});

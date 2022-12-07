import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {libAvatarHeight} from '../../constants/libraryHeader/libraryHeader';
import {Margin} from '../../constants/styles/styleProps';
import {
  selectSearchValue,
  setSearchValueAction,
} from '../../redux/reducers/search/searchSlice';
import useAppDispatch from '../../redux/store/useAppDispatch';
import Avatar from '../avatar/Avatar';
import SearchInputField from '../Inputs/SearchInputField';

const HEADER_IMAGE =
  'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg';
const SEARCH_PLACEHOLDER = 'Search by artists or songs';

type Props = {
  style?: StyleProp<ViewStyle> | undefined;
};

const LibraryHeader: React.FC<Props> = ({style}) => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectSearchValue);
  const onChangeText = (value: string) => dispatch(setSearchValueAction(value));

  return (
    <View style={[styles.container, style]}>
      <Avatar style={styles.avatar} imageUri={HEADER_IMAGE} />
      <SearchInputField
        onChangeText={onChangeText}
        placeholder={SEARCH_PLACEHOLDER}
        value={searchValue}
      />
    </View>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: Margin.S,
    height: libAvatarHeight,
  },
});

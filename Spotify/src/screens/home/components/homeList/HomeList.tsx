import React from 'react';
import {FlatList} from 'react-native';
import HomeHeader from '../header/HomeHeader';
import HomeListItem from './HomeListItem';

const HomeList: React.FC = () => {
  const renderItem = () => <HomeListItem />;
  const renderHeader = () => <HomeHeader />;

  const data = ['test', 'test'];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default HomeList;

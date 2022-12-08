import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type Props = {};

const HomeListItem: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <View>{children}</View>;
};

export default HomeListItem;

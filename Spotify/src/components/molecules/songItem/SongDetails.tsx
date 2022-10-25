import React from 'react';
import {StyleSheet} from 'react-native';
import {StyleProp, View, ViewStyle} from 'react-native';
import Label from '../../atoms/Texts/Label';
import Subtitle from '../../atoms/Texts/Subtitle';

const MAX_NUMBER_OF_LINES = 1;

type Props = {
  songName: string;
  author: string;
  style?: StyleProp<ViewStyle> | undefined;
};

const SongDetails: React.FC<Props> = ({songName, author, style}) => {
  return (
    <View style={[style]}>
      <Subtitle ellipsizeMode="tail" numberOfLines={MAX_NUMBER_OF_LINES}>
        {songName}
      </Subtitle>
      <Label
        ellipsizeMode="tail"
        numberOfLines={MAX_NUMBER_OF_LINES}
        style={styles.label}>
        {author}
      </Label>
    </View>
  );
};

export default SongDetails;

const styles = StyleSheet.create({
  label: {
    color: 'grey',
  },
});

import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import LikeButton from '../likeButton/LikeButton';
import useOnSongsLike from './useOnSongLike';

type Props = {
  songId: string;
  style?: StyleProp<ViewStyle> | undefined;
  heartFilledStyle?: StyleProp<TextStyle>;
  heartOutlineStyle?: StyleProp<TextStyle>;
};

const LikeSongButton: React.FC<Props> = ({
  songId,
  style,
  heartFilledStyle,
  heartOutlineStyle,
}) => {
  const [isSongLiked, onSongLike] = useOnSongsLike(songId);

  return (
    <LikeButton
      style={style}
      heartFilledStyle={heartFilledStyle}
      heartOutlineStyle={heartOutlineStyle}
      onPress={() => onSongLike(songId)}
      isLiked={isSongLiked}
    />
  );
};

export default LikeSongButton;

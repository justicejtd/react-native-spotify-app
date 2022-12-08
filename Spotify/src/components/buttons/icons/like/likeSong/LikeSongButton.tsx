import React from 'react';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

import LikeIconButton from '../LikeIconButton';
import useOnSongsLike from './useOnSongLike';

type Props = {
  songId: string;
  style?: StyleProp<ViewStyle> | undefined;
  heartFilledStyle?: StyleProp<ImageStyle>;
  heartOutlineStyle?: StyleProp<ImageStyle>;
};

const LikeSongButton: React.FC<Props> = ({
  songId,
  style,
  heartFilledStyle,
  heartOutlineStyle,
}) => {
  const [isSongLiked, onSongLike] = useOnSongsLike(songId);

  return (
    <LikeIconButton
      style={style}
      heartFilledIconStyle={heartFilledStyle}
      heartOutlineIconStyle={heartOutlineStyle}
      onPress={() => onSongLike(songId)}
      isLiked={isSongLiked}
    />
  );
};

export default LikeSongButton;

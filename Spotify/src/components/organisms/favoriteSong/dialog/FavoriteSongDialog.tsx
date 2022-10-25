import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsFavDialogVisible} from '../../../../redux/reducers/dialog/favDialogSelectors';
import {selectSelectedFavSong} from '../../../../redux/reducers/selectedFavSong/selectedFavSongSelectors';
import ActionDialog from '../../../molecules/dialog/ActionDialog';

// Dialog constants
const DIALOG_TITLE = 'Remove from Liked Songs?';
const DIALOG_REJECT_BTN_LABEL = 'Cancel';
const DIALOG_APPROVE_BTN_LABEL = 'Remove';

type Props = {
  onCancel(): void;
  onApprove(songId: string): void;
};
const FavoriteSongDialog: React.FC<Props> = ({onCancel, onApprove}) => {
  const isVisible = useSelector(selectIsFavDialogVisible);
  const song = useSelector(selectSelectedFavSong);

  return (
    <ActionDialog
      title={DIALOG_TITLE}
      description={song?.track.name}
      visible={isVisible}
      verticalButtons={true}
      buttonApprove={{
        label: DIALOG_APPROVE_BTN_LABEL,
        onPress: () => onApprove(song.track.id),
      }}
      buttonReject={{
        label: DIALOG_REJECT_BTN_LABEL,
        onPress: onCancel,
      }}
    />
  );
};

export default FavoriteSongDialog;

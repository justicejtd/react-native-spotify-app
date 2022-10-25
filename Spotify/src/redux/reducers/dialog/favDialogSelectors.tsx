import {RootState} from '../../store/store';

export const selectIsFavDialogVisible = (state: RootState) =>
  state.favDialogReducer;

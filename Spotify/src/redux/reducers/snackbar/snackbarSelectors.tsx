import {RootState} from '../../store/store';

export const selectIsUndoSnackbarVisible = (state: RootState): boolean =>
  state.undoSnackbarReducer;

import {AnyAction, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';

export const SNACKBAR_SLICE_PREFIX = 'dialog';

const initialState: boolean = false;

// Reducers
const toggleUndoSnackbarReducer = (
  state: boolean,
  action: PayloadAction<boolean>,
) => {
  state = action.payload;
  return state;
};

const options = {
  name: SNACKBAR_SLICE_PREFIX,
  initialState: initialState,
  reducers: {
    toggleUndoSnackbarReducer: toggleUndoSnackbarReducer,
  },
};

const undoSnackbarSlice = createSlice(options);

// Actions
export const toggleUndoSnackbarAction =
  undoSnackbarSlice.actions.toggleUndoSnackbarReducer;

const undoSnackbarReducer: Reducer<boolean, AnyAction> =
  undoSnackbarSlice.reducer;

export default undoSnackbarReducer;

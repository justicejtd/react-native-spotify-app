import {AnyAction, createSlice, Reducer} from '@reduxjs/toolkit';

export const DIALOG_SLICE_PREFIX = 'dialog';

const initialState: boolean = false;

// Reducers
const toggleFavDialogReducer = (state: boolean) => {
  state = !state;
  return state;
};

const options = {
  name: DIALOG_SLICE_PREFIX,
  initialState: initialState,
  reducers: {
    toggleFavDialogReducer: toggleFavDialogReducer,
  },
};

const favDialogSlice = createSlice(options);

// Actions
export const toggleFavDialogAction =
  favDialogSlice.actions.toggleFavDialogReducer;

const favDialogReducer: Reducer<boolean, AnyAction> = favDialogSlice.reducer;

export default favDialogReducer;

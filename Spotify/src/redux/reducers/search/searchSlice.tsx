import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

const SEARCH_PREFIX = 'search';

// Reducers
const setSearchValue = (state: string, action: PayloadAction<string>) =>
  (state = action.payload);

const clearSearchValue = (state: string) => (state = '');

export const searchSlice = createSlice({
  name: SEARCH_PREFIX,
  initialState: '',
  reducers: {
    setSearchValueAction: setSearchValue,
    clearSearchValueAction: clearSearchValue,
  },
});

export const {setSearchValueAction, clearSearchValueAction} =
  searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.searchReducer;

const searchReducer = searchSlice.reducer;
export default searchReducer;

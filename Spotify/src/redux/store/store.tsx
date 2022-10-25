import {configureStore} from '@reduxjs/toolkit';
import rtkApi from '../api/apiSlice';
import favDialogReducer from '../reducers/dialog/favDialogSlice';
import favoriteSongsReducer from '../reducers/favoriteSongs/favoriteSongsSlice';
import searchReducer from '../reducers/search/searchSlice';
import selectedFavSongReducer from '../reducers/selectedFavSong/selectedFavSongSlice';
import undoSnackbarReducer from '../reducers/snackbar/snackbarSlice';

const store = configureStore({
  reducer: {
    favoriteSongsReducer,
    searchReducer,
    favDialogReducer,
    undoSnackbarReducer,
    selectedFavSongReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred dispatch type
export type AppDispatch = typeof store.dispatch;

export default store;

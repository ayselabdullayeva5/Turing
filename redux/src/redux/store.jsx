import { configureStore } from '@reduxjs/toolkit';
import favouritesSlice from './favouritesSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesSlice,
  },
});

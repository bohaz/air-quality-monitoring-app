import { configureStore } from '@reduxjs/toolkit';
import airReducer from './airSlice';

export const store = configureStore({
  reducer: {
    air: airReducer,
  },
});

export default store;

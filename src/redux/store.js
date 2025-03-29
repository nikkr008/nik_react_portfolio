import { configureStore } from '@reduxjs/toolkit';
import cvReducer from './cvSlice';

export const store = configureStore({
  reducer: {
    cv: cvReducer,
  },
});

export default store; 
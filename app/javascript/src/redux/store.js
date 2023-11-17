import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    // Add the greetings reducer as a top-level Redux reducer
    greetings: greetingsReducer,
  },
});

export default store;

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import dummyReducerSlice from './dummyReducer/slice';

const rootReducer = combineReducers({
  dummyReducer: dummyReducerSlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const INIT_STATE: AppState = {
  dummyReducer: { data: 0 }
};

export default configureStore({
  reducer: rootReducer
});

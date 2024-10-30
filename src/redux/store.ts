import {combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './PostSlice/PostSlice.ts';
import {postsApi} from '../api/postsService.ts';
import {setupListeners} from '@reduxjs/toolkit/query';

const reducer = combineReducers({
  post: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer
})

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof reducer>;
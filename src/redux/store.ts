import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostSlice/PostSlice.ts';
import { postsApi } from './baseApiSlice.ts';
import { setupListeners } from '@reduxjs/toolkit/query';

const reducer = combineReducers({
  post: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(postsApi.middleware);

export const store = configureStore({
  reducer: reducer,
  middleware,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
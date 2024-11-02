import {createSlice} from '@reduxjs/toolkit';
import {postsApi} from '../baseApiSlice.ts';

export type Post = {
  id: number,
  title: string,
  body: string,
  userId: number,
}

type PostState = {
  data: Post[],
}

const initialState: PostState = {
  data: [],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state: PostState, { payload }: { payload: Post[] }) => {
        state.data = payload
      }
    )
  }
});

export const {addPosts} = postSlice.actions;
export default postSlice.reducer;

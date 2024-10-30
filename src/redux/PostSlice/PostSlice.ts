import {createSlice} from '@reduxjs/toolkit';

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
});

export const {addPosts} = postSlice.actions;
export default postSlice.reducer;

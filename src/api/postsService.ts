import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../redux/PostSlice/PostSlice.ts';

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: 'posts?_limit=10',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
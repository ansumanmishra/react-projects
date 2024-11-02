import {Post} from '../redux/PostSlice/PostSlice.ts';
import {postsApi} from '../redux/baseApiSlice.ts';

const postsApiSlice = postsApi.injectEndpoints && postsApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: 'posts?_limit=10',
        method: 'GET',
      }),
      providesTags: ['GetPosts'],
    }),
    getPostById: builder.query<Post, number>({
      query: (id: number) => ({
        url: `posts/${id}`,
        method: 'GET',
      }),
      providesTags: ['GetPostById'],
    }),
    createPost: builder.mutation<Post, Post>({
      query: (post: Post) => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [{type: 'GetPosts'}],
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostByIdQuery, useCreatePostMutation } = postsApiSlice;
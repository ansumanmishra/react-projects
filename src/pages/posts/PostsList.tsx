import {useGetPostsQuery} from '../../api/postsService.ts';

export const PostsList = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector((state: RootState) => state.post.data);
  const {data: posts, isLoading, isError, isUninitialized} = useGetPostsQuery();

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
import {useGetPostsQuery, useLazyGetPostByIdQuery} from '../../api/postsApiSlice.ts';

export const PostsList = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector((state: RootState) => state.post.data);
  const {data: posts, isLoading, isError, isUninitialized} = useGetPostsQuery();
  const [triggerPostDetailById, result] = useLazyGetPostByIdQuery();
  const {isLoading: isLoadingPostDetail, isError: isErrorPostDetail, data} = result;

  const handleTitleClick = (postId) => {
    triggerPostDetailById(postId);
  };

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <div style={{display: 'flex'}}>
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2 onClick={() => handleTitleClick(post.id)}>{post.title}</h2>
            </div>
          ))}
        </div>

        <div>
          <p>
            {isLoading ? 'Loading...' : isError ? 'Error...' : data?.body}
          </p>
        </div>
      </div>
    </>
  );
};
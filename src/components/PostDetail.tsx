import {loadingStates, useApi} from '../hooks/useApi.ts';

export const PostDetail = () => {
  const [post, loadingState] = useApi<{ id: number; title: string, body: string }>('https://jsonplaceholder.typicode.com/posts/1', {id: 1, title: '', body: ''});

  if (loadingState === loadingStates.loading) {
    return <p>Loading...</p>;
  }

  if (loadingState === loadingStates.error) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>Post Detail</h1>

      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};
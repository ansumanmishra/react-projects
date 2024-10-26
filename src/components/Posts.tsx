import {loadingStates, useApi} from '../hooks/useApi.ts';

export const Posts = () => {
  const [posts, loadingState] = useApi<{ id: number; title: string }[]>('https://jsonplaceholder.typicode.com/posts?limit=10', []);

  if (loadingState === loadingStates.loading) {
    return <p>Loading...</p>;
  }

  if (loadingState === loadingStates.error) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
import {useQuery} from '@tanstack/react-query';
import {getPosts} from '../api/get-posts.ts';

const PostsCached = () => {
  const { data: post, isLoading } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostsCached;
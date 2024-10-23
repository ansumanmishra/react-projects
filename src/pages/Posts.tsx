import {useMutation, useQuery, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';
import {createPost, getPosts} from '../api/get-posts.ts';

const Posts = () => {
  const queryClient = useQueryClient();
  const {data: post, isLoading} = useQuery({queryKey: ['posts'], queryFn: getPosts});
  // const { data: posts, isLoading } = useSuspenseQuery({ queryKey: ['posts'], queryFn: getPosts });

  const {mutateAsync: createPostMutation} = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: () => {
      console.log('error');
    }
  });

  /*  useEffect( () => {
      const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      }
      getPosts();
    }, [])*/

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={async () => await createPostMutation({title: 'new post', body: 'test', userId: 1})}>Create Post </button>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Posts;
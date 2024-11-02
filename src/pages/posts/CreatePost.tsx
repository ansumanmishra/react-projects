import {Post} from '../../redux/PostSlice/PostSlice.ts';
import {useCreatePostMutation} from '../../api/postsApiSlice.ts';

export const CreatePost = () => {
  const [createPost, response] = useCreatePostMutation<Post | undefined>();

  const handleCreatePost = () => {
    createPost({title: 'title', body: 'body', userId: 1});
  }

  return (
    <>
      <h1>Create Post</h1>

      <button onClick={handleCreatePost}>Create Post</button>
    </>
  );
};
import {useParams} from 'react-router';
import {useEffect, useState} from 'react';

export const PostDetail = () => {
  const {postId} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [postId])

  return (
    <>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};
import {wrapPromise} from '../utils/utils.ts';

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const postResource = wrapPromise(
  new Promise((resolve) => setTimeout(resolve, 2000)).then(fetchPost)
);

const Posts = () => {
  const post = postResource.read();

  return (
    <div>
      <h1>Posts</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Posts;
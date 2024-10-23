import {wrapPromise} from '../utils/utils.ts';

const fetchComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const commentsResource = wrapPromise(
  new Promise((resolve) => setTimeout(resolve, 4000)).then(fetchComments)
);


export const Comments = () => {
  const comments = commentsResource.read();

  return (
    <>
      <h1>Comments</h1>
      {
        comments.map(comment => (
          <div key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        ))
      }
    </>
  );
};
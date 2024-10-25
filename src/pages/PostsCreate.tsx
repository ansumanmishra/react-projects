import {Form} from 'react-router-dom';

export const PostsCreate = () => {
  return (
    <>
    <h2>Add Post</h2>
      <div>
        <Form method="post">
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Body:
            <textarea name="body" />
          </label>
          <button type="submit">Add Post</button>
        </Form>
      </div>
    </>
  );
};
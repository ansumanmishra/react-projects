import {redirect} from 'react-router-dom';

const isUserAuthenticated = true;

export const PostsLoader = async () => {
  if (!isUserAuthenticated) {
    throw redirect('/');
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
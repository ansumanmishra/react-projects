import {Link} from 'react-router-dom';

export const Error = () => {
  return (
    <>
      <h2>Error</h2>
      <p>Something went wrong</p>
      <p>Go to <Link to="/">Home</Link> page</p>
    </>
  );
};
import {useLoaderData} from 'react-router';
import {Link, Outlet} from 'react-router-dom';

const postsContainerCss = {
  display: "flex",
  gap: "1rem",
  fontWeight: 500,
  fonSize: "18px",
  marginBottom: '20px'
}

export const Posts = () => {
  const posts = useLoaderData();

  return (
    <>
      <h2>Posts</h2>
      <div style={postsContainerCss}>
        <ul style={{width: '50%'}}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <div style={{width: '50%'}}>
          <Outlet/>
        </div>
      </div>
    </>
  );
};
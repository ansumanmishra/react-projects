import {useNavigate} from 'react-router';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/jobs")}>Jobs</li>
          <li onClick={() => navigate("/posts")}>Posts</li>
        </ul>
      </header>
    </>
  );
};
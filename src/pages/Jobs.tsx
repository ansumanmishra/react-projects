import {Outlet, useNavigate} from 'react-router-dom';

const jobsContainer = {
  display: "flex",
  gap: "1rem",
  fontWeight: 500,
  fonSize: "18px",
  marginBottom: '20px'
}

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Jobs</h2>
      <div style={jobsContainer}>
        <div onClick={() => navigate("/jobs/frontend")}>Frontend</div>
        <div onClick={() => navigate("/jobs/backend")}>Backend</div>
      </div>
      <Outlet/>
    </>
  );
};

export default Jobs;

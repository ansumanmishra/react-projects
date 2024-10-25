import {useParams} from 'react-router';

export const JobsListing = () => {
  const {jobId} = useParams();

  return (
    <>
    Open Jobs: {jobId}</>
  );
};
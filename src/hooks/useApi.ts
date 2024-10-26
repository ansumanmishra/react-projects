import {useEffect, useState} from 'react';

export const loadingStates = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response.json();
}


export const useApi = (url: string) => {
  const [loadingState, setLoadingState] = useState(loadingStates.idle);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoadingState(loadingStates.loading);

    const fetchData = async () => {
      try {
        const data = await getData(url);
        setLoadingState(loadingStates.success);
        setData(data);
      } catch (error) {
        console.log(error);
        setLoadingState(loadingStates.error);
      }
    }

    fetchData();

  }, [url]);

  return [data, loadingState];
}
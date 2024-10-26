import {useEffect, useState} from 'react';

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key) || JSON.stringify([])));

  useEffect( () => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);


  return [value, setValue];
};
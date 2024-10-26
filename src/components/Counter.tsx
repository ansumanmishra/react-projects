import {useCallback, useState} from 'react';
import {Button} from './Button.tsx';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <h1>Counter</h1>

      <p>Count: {count}</p>

      <Button onIncrement={increment}>Increment</Button>
    </>
  );
};
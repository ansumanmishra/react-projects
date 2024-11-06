import {useCallback, useRef, useState} from 'react';
import {Button} from './Button.tsx';
import {loadingStates} from '../hooks/useApi.ts';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  console.dir(buttonRef.current);
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <h1>Counter</h1>

      <p>Count: {count}</p>

      <Button onIncrement={increment} ref={buttonRef}>Increment</Button>
    </>
  );
};
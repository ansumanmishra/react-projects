import {memo} from 'react';

export const Button = memo((props) => {
  console.log('button rendered');
  return (
    <>
      <button onClick={props.onIncrement}>{props.children}</button>
    </>
  );
});
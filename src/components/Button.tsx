import {forwardRef, memo} from 'react';

export const Button = memo(forwardRef<HTMLButtonElement>((props, buttonRef) => {
  return (
    <>
      <button onClick={props.onIncrement} ref={buttonRef}>{props.children}</button>
    </>
  );
}));
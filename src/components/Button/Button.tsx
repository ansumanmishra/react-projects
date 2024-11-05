import {StyledButton, StyledButtonEmotion, StyledButtonEmotion1} from './ButtonStyles.ts';

export const Button = (props) => {
  return (
    <>
      {/* Material UI Button */}
{/*
      <StyledButton variant="contained" {...props}>Hello world</StyledButton>
*/}

      {/* Emotion Button */}

      <StyledButtonEmotion {...props}>{props.children}</StyledButtonEmotion>

{/*
      <StyledButtonEmotion1 primary>SUBMIT</StyledButtonEmotion1>
*/}
    </>
  );
};
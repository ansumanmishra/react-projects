import {StyledList} from './ListStyles.ts';

export const List = ({children, ...props}) => {

  return (
    <>
      <StyledList {...props}>
        {children}
      </StyledList>
    </>
  );
};
import {StyledListItem} from './ListItemStyles.ts';

export const ListItem = ({children, ...props}) => {
  return (
    <>
      <StyledListItem {...props}>{children}</StyledListItem>
    </>
  );
};
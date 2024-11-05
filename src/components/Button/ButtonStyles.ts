import {styled as muiStyled} from '@mui/material';
import styled from '@emotion/styled'

export const StyledButton = muiStyled('button')(({theme, props}) => {
  return {
    borderRadius: 3,
    border: 0,
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    backgroundColor: theme.palette.mode === 'dark' ? '#1565c0' : '#1976d2',
    '&:hover': {
      backgroundColor: '#1565c0',
    }
  }
});

export const StyledButtonEmotion = styled.button`
  border-radius: 3px;
  border: 0;
  color: ${props => props.primary ? 'white' : 'black'};
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  background-color: ${props => props.primary ? '#1976d2' : '#ffffff'};

  &:hover {
    background-color: #1565c0;
  }
`;

export const StyledButtonEmotion1 = styled.button(props => {
  return {
    borderRadius: '3px',
    border: 0,
    color: props.primary ? '#1976d2' : 'black',
    height: '48px',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    backgroundColor: props => props.primary ? '#1976d2' : '#ffffff',
    '&:hover': {
      backgroundColor: '#1565c0',
    }
  }
});
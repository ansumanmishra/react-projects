import {StyledDiv} from './TodoStyles.ts';
import {Input} from '../components/input/Input.tsx';
import {Fragment, useState} from 'react';
import {List} from '../components/list/List.tsx';
import {ListItem} from '../components/ListItem/ListItem.tsx';
import {Button} from '../components/Button/Button.tsx';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

const IconStyle = {
  cursor: 'pointer',
  position: 'relative',
  top: '5px',
};

const StyledDeleteIcon = styled(DeleteIcon)`
  ${IconStyle};
  color: ${prop => prop.color || 'black'};
`;

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleDeleteTodo = (todoItem) => {
    const filteredTodos = todos.filter(todo => todo !== todoItem);
    setTodos(filteredTodos);
  };

  // const Link = StyledButton.withComponent('a');

  return (
    <>
      <StyledDiv>
        <h3>Todo</h3>
        <List>
          {todos.map((todo, index) => (
            <Fragment key={index}>
              <ListItem>
                <StyledDeleteIcon color="darkred" onClick={() => handleDeleteTodo(todo)}></StyledDeleteIcon>
                {todo}
              </ListItem>
            </Fragment>
          ))}
        </List>

        <Input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <Button primary onClick={handleClick}>Add Todo</Button>

        {/*
        <Link primary  href="https://reactjs.org">Learn React</Link>
*/}
      </StyledDiv>
    </>
  );
};
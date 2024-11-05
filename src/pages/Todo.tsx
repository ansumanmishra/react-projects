import {StyledDiv} from './TodoStyles.ts';
import {Input} from '../components/input/Input.tsx';
import {useState} from 'react';
import {List} from '../components/list/List.tsx';
import {ListItem} from '../components/ListItem/ListItem.tsx';
import {Button} from '../components/Button/Button.tsx';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <>
      <StyledDiv>
        <h3>Todo</h3>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo}>{todo}</ListItem>
          ))}
        </List>

        <Input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <Button primary onClick={handleClick}>Add Todo</Button>
      </StyledDiv>
    </>
  );
};
import {useState} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';

export const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useLocalStorage('todos');

  const addTodo = (e) => {
    e.preventDefault();
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    setTodo('');
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter(t => t !== todo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo</h1>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
      <button type="button" onClick={addTodo}>Add</button>
      <br/>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo} <span onClick={() => deleteTodo(todo)}>(X)</span></li>)}
      </ul>
    </>
  );
};
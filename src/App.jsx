import { useEffect, useState } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';

import TodoList from './components/TodoList';

import Container from 'react-bootstrap/esm/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const [preventEmptySave, setPreventEmptySave] = useState(true);

  const [removeCompletedItemsRef] = useAutoAnimate();

  const saveTodos = () => {
    if (todos.length < 1 && preventEmptySave) { return; }
    setPreventEmptySave(true);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleAddTodo = todo => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const handleTodoChecked = (id, completed) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        todo.completed = completed;
      }
      return todo;
    }));
  };

  const handleTodoRemove = id => {
    setPreventEmptySave(false);
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleRemoveCompletedTasks = () => {
    setPreventEmptySave(false);
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  return (
    <>
      <Header handleAddTodo={handleAddTodo} />

      <div className='App-remove-completed-tasks-button container text-center' ref={removeCompletedItemsRef}>
        {todos.filter(todo => todo.completed).length > 0 &&
          <button onClick={handleRemoveCompletedTasks} className='btn btn-warning'>Remove Completed Tasks</button>}
      </div>

      <TodoList todos={todos} handleTodoChecked={handleTodoChecked} handleTodoRemove={handleTodoRemove} />

    </>
  );
}

export default App;

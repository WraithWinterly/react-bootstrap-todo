import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);

  /*
    Explanation
    React 18 double fires useEffect in Strict Mode to assure a correct object lifecycle
    The useEffect will save an empty array and wipe the local data before loading.
    To get around that, preventEmptySave is used.
    Without the preventEmptySave check, the local data will be wiped on every load.
  */
  const [preventEmptySave, setPreventEmptySave] = useState(true);

  const [autoAnimate] = useAutoAnimate();

  const saveTodos = () => {
    if (todos.length < 1 && preventEmptySave) { return; }
    setPreventEmptySave(true);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleAddTodo = todo => {
    setTodos(prevTodos => [todo, ...prevTodos]);
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
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <Header handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleTodoChecked={handleTodoChecked} handleTodoRemove={handleTodoRemove} handleRemoveCompletedTasks={handleRemoveCompletedTasks} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

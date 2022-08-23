import React from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import TodoItem from './TodoItem';

function TodoList({ todos, handleTodoChecked, handleTodoRemove }) {

  const [listRef] = useAutoAnimate();

  return (
    <div className='TodoList' ref={listRef}>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} handleTodoChecked={handleTodoChecked} handleTodoRemove={handleTodoRemove} />)}
    </div>
  );
}

export default TodoList;
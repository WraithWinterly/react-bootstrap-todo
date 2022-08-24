import React from 'react';

import '../styles/TodoItem.css';

function TodoItem({ todo, handleTodoChecked, handleTodoRemove }) {
  return (
    <div className='TodoItem container text-center w-75 rounded-2 my-2 text-white d-flex justify-content-between'>
      <div className='input-group d-flex align-items-center' role='group'>
        <input className='form-check-input rounded-1' type='checkbox' checked={todo.completed} onChange={() => handleTodoChecked(todo.id, !todo.completed)} />
        <label className='m-2'>{todo.text}</label>
      </div>
      <button className='btn-close btn-close-white align-self-center' onClick={() => handleTodoRemove(todo.id)}></button>
    </div>
  );
}

export default TodoItem;
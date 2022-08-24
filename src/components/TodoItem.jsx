import React from 'react';

function TodoItem({ todo, handleTodoChecked, handleTodoRemove }) {
  return (
    <div className='TodoItem container text-center w-75 rounded-2 py-3 my-2 text-white d-flex justify-content-between' style={{ backgroundColor: 'var(--accent-color' }}>
      <div className='input-group d-flex align-items-center' role='group'>
        <input className='form-check-input rounded-1' type='checkbox' checked={todo.completed} onChange={() => handleTodoChecked(todo.id, !todo.completed)} />
        <h4 className='m-2' style={{ fontWeight: 'normal' }}>{todo.text}</h4>
      </div>
      <button className='btn-close btn-close-white align-self-center' onClick={() => handleTodoRemove(todo.id)}></button>
    </div>
  );
}

export default TodoItem;
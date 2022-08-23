import React from 'react';

function TodoItem({ todo, handleTodoChecked, handleTodoRemove }) {
  return (
    <div className='TodoItem container my-3'>
      <div className='container text-center w-25 bg-info py-2 d-flex justify-content-between'>
        <input className='' type='checkbox' checked={todo.completed} onChange={() => handleTodoChecked(todo.id, !todo.completed)} />
        <span>{todo.text}</span>
        <button className='btn btn-danger' onClick={() => handleTodoRemove(todo.id)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
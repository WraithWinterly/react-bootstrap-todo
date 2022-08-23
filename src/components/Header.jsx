import React from 'react';

import CreateTodo from './CreateTodo';

function Header({ handleAddTodo }) {
  return (
    <div className='Header bg-dark text-bg-dark py-3'>
      <div className='container text-center'>
        <h3 className='py-3'>Todo App: React React-Bootstrap</h3>
        <div className='container text-center w-25'>
          <CreateTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}

export default Header;
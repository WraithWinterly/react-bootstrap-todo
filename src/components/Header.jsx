import React from 'react';

import CreateTodo from './CreateTodo';

import '../styles/Header.css';

function Header({ handleAddTodo }) {
  return (
    <nav className='Header py-3 text-white'>
      <div className='container text-center'>
        <div className="d-flex align-items-center justify-content-center">
          <h3 className='py-3 mx-2'>Todo App: React React-Bootstrap</h3>
          <button className='btn btn-primary mx-2' data-bs-toggle="collapse" data-bs-target='#create-todo'>Create Todo</button>
        </div>

        <CreateTodo handleAddTodo={handleAddTodo} />
      </div>
    </nav>
  );
}

export default Header;
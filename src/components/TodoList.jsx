import React from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import TodoItem from './TodoItem';

function TodoList({ todos, handleTodoChecked, handleTodoRemove, handleRemoveCompletedTasks }) {

  const [autoAnimateButton] = useAutoAnimate();
  const [autoAnimateList] = useAutoAnimate();

  return (
    // To do Container
    <div className="container w-100 mb-4">
      <div className="card">
        <div className="card-header text-center">
          <h2 style={todos.length > 0 ? {} : { fontStyle: 'italic' }} >{todos.length > 0 ? `Todos (${todos.length})` : 'Your todo list is empty'}</h2>
        </div>
        <div className="card-body">
          {/* Remove Checked Tasks Button if they are there */}
          <div className='App-remove-completed-tasks-button container text-center' ref={autoAnimateButton}>
            {todos.filter(todo => todo.completed).length > 0 &&
              <button onClick={handleRemoveCompletedTasks} className='btn btn-warning btn-lg'>Remove Completed Tasks</button>}
          </div>

          {/* Todo Item List */}
          <div className='TodoList' ref={autoAnimateList}>
            {todos.length > 0
              ? todos.map(todo => <TodoItem key={todo.id} todo={todo} handleTodoChecked={handleTodoChecked} handleTodoRemove={handleTodoRemove} />)
              : <div className="container d-flex flex-column w-50 text-center justify-content-center">
                <h4 className='py-3 rounded-3 text-white' style={{ backgroundColor: 'var(--accent-color)' }}>All todos are complete!</h4>
              </div>
            }
          </div>
        </div>
      </div>



    </div>
  );
}

export default TodoList;
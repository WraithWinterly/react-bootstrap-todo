import React, { useId, useMemo, useState } from 'react';

import { v4 as genUUID4 } from 'uuid';

function CreateTodo({ handleAddTodo }) {
  const id = useId();

  const [currentText, setCurrentText] = useState('');

  const newTodo = useMemo(() => {
    return {
      id: genUUID4(),
      text: currentText,
      completed: false
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleAddTodo(newTodo);
    setCurrentText('');
  };

  return (
    <div className="container container-sm collapse" id='create-todo'>

      <form className='form-control mt-3' onSubmit={e => handleSubmit(e)}>
        <div className='form-floating text-start border-primary'>
          <input className='form-control' value={currentText} onChange={e => { setCurrentText(e.target.value); }} type='text' id={`${id}-name`} placeholder='name' required autoComplete='off'></input>
          <label className='form-label' htmlFor={`${id}-name`}>Name</label>
        </div>

        <button className='btn btn-primary my-2'>Submit</button>
      </form>
    </div>

  );
}

export default CreateTodo;
import React, { useId, useMemo, useState } from 'react';

import { v4 as genUUID4 } from 'uuid';

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

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
    <>
      <button className='btn btn-primary'>Create Todo</button>
      <form onSubmit={e => handleSubmit(e)}>
        <label className='form-label my-2' htmlFor={`${id}-name`}>Name</label>
        <input className='form-control my-2' value={currentText} onChange={e => { setCurrentText(e.target.value); }} type='text' id={`${id}-name`} required></input>
        <button className='btn btn-primary my-2'>Submit</button>
      </form>
    </>
  );
}

export default CreateTodo;
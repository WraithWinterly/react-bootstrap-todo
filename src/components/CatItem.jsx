import React, { useId } from 'react';

function CatItem({ cat, handleCatEdit, handlecatRemove }) {
  const id = useId();

  return (
    <div
      className='catItem container text-center w-75 rounded-2 py-3 my-2 text-white d-flex justify-content-between'
      style={{ backgroundColor: 'var(--accent-color' }}>
      <div className='input-group d-flex align-items-center' role='group'>
        <label for={`${id}-checkbox`}>
          <h4 className='m-2' style={{ fontWeight: 'normal' }}>
            {cat.text}
          </h4>
        </label>
      </div>
      <button className='btn-close btn-close-white align-self-center' onClick={() => handlecatRemove(cat.id)}></button>
    </div>
  );
}

export default CatItem;

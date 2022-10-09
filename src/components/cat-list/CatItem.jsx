import React, { useId } from 'react';

function CatItem({ cat, handleCatEdit }) {
  const id = useId();

  return (
    <div
      className='container text-center w-75 rounded-2 py-3 my-2 text-white d-flex flex-column justify-content-between'
      style={{ backgroundColor: 'var(--accent-color' }}>
      <img src={cat.url} alt='Cat Image' className='img-fluid my-2 rounded' />
      <div className='d-flex justify-content-between px-2'>
        <h4 className='m-2' style={{ fontWeight: 'normal' }}>
          {cat.name}
        </h4>
        {!cat.adoption && (
          <button
            onClick={() => handleCatEdit(cat)}
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#modalEditCat'>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default CatItem;

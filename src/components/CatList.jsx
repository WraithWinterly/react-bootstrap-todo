import React from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import CatItem from './CatItem';

function CatList({ cats, handleCatEdit, handleCatRemove }) {
  const [autoAnimateButton] = useAutoAnimate();
  const [autoAnimateList] = useAutoAnimate();

  return (
    // To do Container
    <div className='container w-100 mb-4'>
      <div className='card'>
        <div className='card-header text-center'>
          <h2 style={cats.length > 0 ? {} : { fontStyle: 'italic' }}>
            {cats.length > 0 ? `Todos (${cats.length})` : 'Your cat list is empty'}
          </h2>
        </div>
        <div className='card-body'>
          {/* Cars Item List */}
          <div className='TodoList' ref={autoAnimateList}>
            {cats.length > 0 ? (
              cats.map((cat) => (
                <CatItem key={todo.id} cat={cat} handleCatEdit={handleCatEdit} handlecatRemove={handleCatRemove} />
              ))
            ) : (
              <div className='container d-flex flex-column w-50 text-center justify-content-center'>
                <h4 className='py-3 rounded-3 text-white' style={{ backgroundColor: 'var(--accent-color)' }}>
                  Let's add a cat now!
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatList;

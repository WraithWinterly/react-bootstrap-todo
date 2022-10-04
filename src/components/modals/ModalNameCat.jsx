import React from 'react';

import BSModal from '../BSModal';

import { useRef } from 'react';

function ModalNameCat({ cat, handleCatEditConfirm }) {
  const textInput = useRef();
  return (
    <BSModal
      id='modalNameCat'
      headerTitle={'Name Your Cat'}
      BodyContent={() => {
        return (
          <>
            <input
              ref={textInput}
              type='text'
              className='form-control'
              placeholder='Cat Name'
              aria-label='Cat Name'></input>
          </>
        );
      }}
      FooterContent={() => {
        return (
          <>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={() => {
                handleCatEditConfirm({ ...cat, name: textInput.current.value });
              }}>
              Accept New Name
            </button>
          </>
        );
      }}
    />
  );
}

export default ModalNameCat;

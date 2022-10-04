import React from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

import BSModal from '../BSModal';

function ModalEditCat({ cat, handleCatEditConfirm, handleCatAdoption }) {
  const nameRef = useRef();
  const [adoptionAttempted, setAdoptionAttempted] = useState(false);

  useEffect(() => {
    nameRef.current.value = cat.name;
    setAdoptionAttempted(false);
  }, [cat]);

  return (
    <BSModal
      id='modalEditCat'
      headerTitle={"Edit Your Cat's Name"}
      BodyContent={() => {
        return (
          <>
            <input
              ref={nameRef}
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
            {adoptionAttempted ? (
              <button
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => handleCatAdoption(cat)}>
                Confirm Adoption
              </button>
            ) : (
              <button
                className='btn btn-danger'
                onClick={() => setAdoptionAttempted(true)}>
                Put for adoption
              </button>
            )}

            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Cancel Changes
            </button>
            <button
              type='button'
              className='btn btn-success'
              data-bs-dismiss='modal'
              onClick={() =>
                handleCatEditConfirm({ ...cat, name: nameRef.current.value })
              }>
              Accept Changes
            </button>
          </>
        );
      }}
    />
  );
}

export default ModalEditCat;

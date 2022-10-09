import React from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

import BSModal from '../BSModal';

function ModalEditCat({ cat, handleCatEditConfirm, handleCatAdoption }) {
  const nameRef = useRef();
  const [adoptionAttempted, setAdoptionAttempted] = useState(false);

  return (
    <BSModal
      id='modalEditCat'
      headerTitle={`Edit ${cat?.name}`}
      BodyContent={() => {
        return (
          <div className='d-flex flex-column align-items-center gap-4 my-4'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              data-bs-toggle='modal'
              data-bs-target='#modalNameCat'>
              Rename Cat
            </button>
            {adoptionAttempted ? (
              <button
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => {
                  handleCatAdoption(cat);
                }}>
                Confirm Adoption
              </button>
            ) : (
              <button
                className='btn btn-warning'
                onClick={() => setAdoptionAttempted(true)}>
                Put for adoption
              </button>
            )}
          </div>
        );
      }}
      FooterContent={() => {
        return (
          <>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Cancel Changes
            </button>
            <button
              type='button'
              className='btn btn-success'
              data-bs-dismiss='modal'
              onClick={() => {
                handleCatEditConfirm({ ...cat, name: nameRef.current.value });
              }}>
              Accept Changes
            </button>
          </>
        );
      }}
      onModalShow={() => {
        setAdoptionAttempted(false);
        console.log('cat', cat);
        nameRef.current.value = cat.name;
        console.log('shown modal', cat);
      }}
      onModalHide={() => {
        console.log('test hide');
      }}
    />
  );
}

export default ModalEditCat;

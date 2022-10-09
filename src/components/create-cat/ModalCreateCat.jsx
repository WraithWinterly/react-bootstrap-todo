import React from 'react';
import { useState, useEffect } from 'react';

import BSModal from '../BSModal';

function ModalCreateCat({ gendCatData, generateCat, handleCatAdd }) {
  return (
    <BSModal
      id='modalCreateCat'
      headerTitle={'Create New Cat'}
      BodyContent={() => {
        return (
          <>
            {gendCatData && (
              <div className='d-flex justify-content-center'>
                <img src={gendCatData.url} alt='Cat' className='img-fluid' />
              </div>
            )}
          </>
        );
      }}
      FooterContent={() => {
        return (
          <>
            <button type='button' className='btn btn-primary' onClick={generateCat}>
              Find a new Cat
            </button>
            <button
              type='button'
              className='btn btn-success'
              data-bs-dismiss='modal'
              data-bs-toggle='modal'
              data-bs-target='#modalNameCat'
              onClick={() => handleCatAdd(gendCatData)}>
              Accept Cat
            </button>
          </>
        );
      }}
      onModalShow={() => {
        console.log('tes');
        generateCat();
      }}
    />
  );
}

export default ModalCreateCat;

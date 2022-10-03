import React from 'react';

import BSModal from './BSModal';

function NameCat() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#nameCatModal'>
        Launch name modal
      </button>

      <BSModal
        id='nameCatModal'
        headerTitle={'Name Your Cat'}
        BodyContent={() => {
          return (
            <>
              <input type='text' className='form-control' placeholder='Cat Name' aria-label='Cat Name'></input>
            </>
          );
        }}
        FooterContent={() => {
          return (
            <>
              <button type='button' className='btn btn-primary'>
                Accept New Name
              </button>
            </>
          );
        }}
      />
    </>
  );
}

export default NameCat;

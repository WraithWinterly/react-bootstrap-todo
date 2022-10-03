import React from 'react';

function BSModal({ id, headerTitle, BodyContent, FooterContent }) {
  return (
    <div className='modal fade' id={id} tabIndex='-1' role='dialog' aria-labelledby={`${id}Label`} aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={`${id}Label`}>
              {headerTitle}
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <BodyContent />
          </div>
          <div className='modal-footer'>
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BSModal;

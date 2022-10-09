import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function BSModal({
  id,
  headerTitle,
  BodyContent,
  FooterContent,
  onModalShow,
  onModalHide,
}) {
  const modal = useRef();

  useEffect(() => {
    if (onModalShow === undefined) return;
    if (onModalHide === undefined) return;
    const handleShow = () => {
      setTimeout(() => {
        onModalShow();
      }, 100);
    };
    const handleHide = () => {
      setTimeout(() => {
        onModalHide();
      }, 100);
    };
    modal.current.addEventListener('show.bs.modal', handleShow);
    modal.current.addEventListener('hidden.bs.modal', handleHide);

    return () => {
      modal.current.removeEventListener('show.bs.modal', handleShow);
      modal.current.removeEventListener('hidden.bs.modal', handleHide);
    };
  }, []);

  return (
    <div
      className='modal fade'
      ref={modal}
      id={id}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={`${id}Label`}
      aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={`${id}Label`}>
              {headerTitle}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
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

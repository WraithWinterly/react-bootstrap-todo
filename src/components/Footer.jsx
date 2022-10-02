import React from 'react';

function Footer() {
  return (
    <div
      className='container-fluid text-center text-white m-0 py-2 d-flex flex-column justify-content-center position-absolute w-100'
      style={{
        backgroundColor: 'var(--accent-color)',
        bottom: '0',
        height: '6rem',
      }}>
      <div className='d-flex gap-3 align-items-center justify-content-center'>
        <p className='m-0'>CATAAS created with Vite, React, and Bootstrap.</p>
        <small className='m-0'>&copy;WraithWinterly 2022</small>
      </div>

      <div className='d-flex gap-3 align-items-center justify-content-center'>
        <p className='m-0'>
          Main Site:&nbsp;
          <a className='text-info' href='https://wraithwinterly.github.io' target='_blank' rel='noreferrer'>
            wraithwinterly.github.io
          </a>
        </p>
        <a
          className='text-info'
          href='https://github.com/WraithWinterly/react-bootstrap-todo'
          target='_blank'
          rel='noreferrer'>
          View Source
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React, { useRef } from 'react';

import ReactSVG from '../assets/react.svg';
import CreateCat from './create-cat/CreateCat';

function Header({ setCats }) {
  return (
    <nav
      className='Header py-2 text-white mb-4'
      style={{ backgroundColor: 'var(--accent-color)' }}>
      <div className='container text-center'>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='mb-2' src={ReactSVG} alt='React SVG' />
          <h3 className='py-3 px-2'>The Cats App!</h3>
          <CreateCat setCats={setCats} />
        </div>
      </div>
    </nav>
  );
}

export default Header;

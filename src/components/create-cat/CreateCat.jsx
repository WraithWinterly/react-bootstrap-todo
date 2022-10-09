import React, { useState, useEffect } from 'react';

import ModalCreateCat from './ModalCreateCat';

function CreateCat({ setCats }) {
  const [gendCatData, setGendCatData] = useState({});

  const handleCatAdd = (cat) => {
    const newCat = {
      id: cat.id,
      url: cat.url,
      name: 'No Name!',
      adoption: false,
    };
    console.log('Add New Cat: ', newCat);

    setCats((prevCats) => ({ newCat, ...prevCats }));
  };

  const generateCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      console.log('Gen', data);
      setGendCatData(...data);
    } catch (e) {
      console.log('Failed ', e.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-primary mx-4'
        data-bs-toggle='modal'
        data-bs-target='#modalCreateCat'>
        Create New Cat!
      </button>

      <ModalCreateCat
        gendCatData={gendCatData}
        generateCat={generateCat}
        handleCatAdd={handleCatAdd}
      />
    </>
  );
}

export default CreateCat;

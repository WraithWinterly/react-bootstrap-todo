import React from 'react';
import { useState, useEffect } from 'react';

import BSModal from './BSModal';

function CreateCat({}) {
  const [data, setData] = useState({});

  const generateCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  const hasData = () => {
    return Object.keys(data).length !== 0;
  };

  useEffect(() => {
    const initialData = async () => {
      if (!hasData()) {
        await generateCat();
      }
    };
    initialData();
  }, []);

  return (
    <BSModal
      id='createCatModal'
      headerTitle={'Create New Cat'}
      BodyContent={() => {
        return (
          <>
            {hasData() && (
              <div className='d-flex justify-content-center'>
                <img src={data[0].url} alt='Cat' className='img-fluid' />
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
            <button type='button' className='btn btn-success' data-bs-dismiss='modal'>
              Accept Cat
            </button>
          </>
        );
      }}
    />
  );
}

export default CreateCat;

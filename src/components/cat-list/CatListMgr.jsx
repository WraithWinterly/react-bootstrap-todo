import React, { useState } from 'react';

import CatList from './CatList';
import ModalEditCat from './ModalEditCat';

function CatListMgr({ cats, setCats }) {
  const [currentEditCat, setCurrentEditCat] = useState({});

  const handleCatEditConfirm = (newCat) => {
    console.log('Edit cat:');
    console.log(newCat);
    setCats((prevCats) =>
      prevCats.map((cat) => {
        if (cat.id === newCat.id) {
          cat = newCat;
        }
        return cat;
      }),
    );
  };

  const handleCloseModal = () => {
    setCurrentEditCat({ name: '', id: '', url: '', adoption: false });
  };

  const handleCatEdit = (cat) => {
    setCurrentEditCat(cat);
    console.log('Start edit cat: ', cat);
  };

  const handleCatAdoption = (catToAdopt) => {
    setPreventEmptySave(false);
    setCats((cats) =>
      cats.map((cat) =>
        cat.id === catToAdopt.id ? { ...catToAdopt, adoption: true } : cat,
      ),
    );
  };

  return (
    <div className='d-flex justify-center'>
      <CatList
        cats={cats.filter((cat) => cat.adoption === false)}
        title='Your cats'
        handleCatEdit={handleCatEdit}
      />
      <CatList
        cats={cats.filter((cat) => cat.adoption === true)}
        title='For adoption'
        handleCatEdit={handleCatEdit}
      />
      <ModalEditCat
        cat={currentEditCat}
        handleCatEditConfirm={handleCatEditConfirm}
        handleCatAdoption={handleCatAdoption}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default CatListMgr;

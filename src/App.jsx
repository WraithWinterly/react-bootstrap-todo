import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import CatList from './components/CatList';
import Footer from './components/Footer';

import ModalCreateCat from './components/modals/ModalCreateCat';
import ModalEditCat from './components/modals/ModalEditCat';
import ModalNameCat from './components/modals/ModalNameCat';

function App() {
  const [cats, setCats] = useState([]);
  const [currentEditCat, setCurrentEditCat] = useState({
    id: '',
    name: '',
  });
  /*
    Explanation
    React 18 double fires useEffect in Strict Mode to assure a correct object lifecycle
    The useEffect will save an empty array and wipe the local data before loading.
    To get around that, preventEmptySave is used.
    Without the preventEmptySave check, the local data will be wiped on every load.
  */
  const [preventEmptySave, setPreventEmptySave] = useState(true);

  const [autoAnimate] = useAutoAnimate();

  const saveCats = () => {
    if (cats.length < 1 && preventEmptySave) {
      return;
    }
    setPreventEmptySave(true);
    localStorage.setItem('cats', JSON.stringify(cats));
  };

  const handleCatAdd = (cat) => {
    const newCat = {
      id: cat[0].id,
      url: cat[0].url,
      name: 'No Name!',
      adoption: false,
    };
    console.log('Add New Cat: ', newCat);
    setCurrentEditCat(newCat);
    setCats((prevCats) => [newCat, ...prevCats]);
  };

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

  const handleCatEdit = (cat) => {
    setCurrentEditCat((prevCat) => ({ ...prevCat, id: '' }));
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

  useEffect(() => {
    const loadData = () => {
      setCats(JSON.parse(localStorage.getItem('cats')) || []);
    };
    loadData();
  }, []);

  useEffect(() => {
    saveCats();
  }, [cats]);

  const [data, setData] = useState({});

  const generateCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log('Failed ', e.message);
    }
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
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <Header generateCat={generateCat} />

        {/* <!-- Button trigger modal --> */}
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#modalNameCat'>
          Launch name modal
        </button>

        {/* <!-- Button edit modal --> */}
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#modalEditCat'>
          Launch edit modal
        </button>

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
        </div>
      </div>

      <ModalCreateCat
        data={data}
        hasData={hasData}
        generateCat={generateCat}
        handleCatAdd={handleCatAdd}
      />

      <ModalEditCat
        cat={currentEditCat}
        handleCatEditConfirm={handleCatEditConfirm}
        handleCatAdoption={handleCatAdoption}
      />
      <ModalNameCat cat={currentEditCat} handleCatEditConfirm={handleCatEditConfirm} />

      <Footer />
    </div>
  );
}

export default App;

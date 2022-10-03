import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import CatList from './components/CatList';
import Footer from './components/Footer';

import CreateCat from './components/CreateCat';
import NameCat from './components/NameCat';

function App() {
  const [cats, setCats] = useState([]);

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
    setAdoptedCats((prevCats) => [cat, ...prevCats]);
  };

  const handleCatEdit = (id, newName) => {
    setAdoptedCats((prevCats) =>
      prevCats.map((cat) => {
        if (cat.id === id) {
          cat.name = newName;
        }
        return cat;
      }),
    );
  };

  const handleCatRemove = (id) => {
    setPreventEmptySave(false);
    setCats((cats) => cats.filter((cat) => cat.id !== id));
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

  return (
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <Header handleCatAdd={handleCatAdd} />
        <div className='d-flex justify-center'>
          <CatList cats={cats} title='Your cats' handleCatEdit={handleCatEdit} handleCatRemove={handleCatRemove} />
          <CatList cats={cats} title='For adoption' handleCatEdit={handleCatEdit} handleCatRemove={handleCatRemove} />
        </div>
      </div>

      <CreateCat />
      <NameCat />

      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import CatList from './components/CatList';
import Footer from './components/Footer';

import CreateCat from './components/modals/CreateCat';
import NameCat from './components/modals/NameCat';

function App() {
  const [currentCats, setCurrentCats] = useState([]);
  const [adoptedCats, setAdoptedCats] = useState([]);

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
    if (currentCats.length < 1 && preventEmptySave) {
      return;
    }
    setPreventEmptySave(true);
    localStorage.setItem('currentCats', JSON.stringify(currentCats));
    localStorage.setItem('adoptedCats', JSON.stringify(adoptedCats));
  };

  const handleCatAdd = (todo) => {
    setAdoptedCats((prevTodos) => [todo, ...prevTodos]);
  };

  const handleCatEdit = (id, completed) => {
    setAdoptedCats((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }
        return todo;
      }),
    );
  };

  const handleCatRemove = (id) => {
    setPreventEmptySave(false);
    setCurrentCats((cats) => cats.filter((cat) => cat.id !== id));
    setAdoptedCats((cats) => cats.filter((cat) => cat.id !== id));
  };

  useEffect(() => {
    const loadData = () => {
      setCurrentCats(JSON.parse(localStorage.getItem('currentCats')) || []);
      setAdoptedCats(JSON.parse(localStorage.getItem('adoptedCats')) || []);
    };
    loadData();
  }, []);

  useEffect(() => {
    saveCats();
  }, [currentCats, adoptedCats]);

  return (
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <Header handleCatAdd={handleCatAdd} />
        <div className='d-flex justify-center'>
          <CatList cats={currentCats} handleCatEdit={handleCatEdit} handleCatRemove={handleCatRemove} />
          <CatList cats={currentCats} handleCatEdit={handleCatEdit} handleCatRemove={handleCatRemove} />
        </div>
      </div>

      <CreateCat />

      <Footer />
    </div>
  );
}

export default App;

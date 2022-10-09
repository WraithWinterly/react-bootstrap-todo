import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import CatListMgr from './components/cat-list/CatListMgr';
import Footer from './components/Footer';

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
        <Header setCats={setCats} />
        <CatListMgr cats={cats} setCats={setCats} saveCats={saveCats} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

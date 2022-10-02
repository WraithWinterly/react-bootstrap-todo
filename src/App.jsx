import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Header from './components/Header';
import CatList from './components/CatList';
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

  const handleAddCat = (todo) => {
    setCats((prevTodos) => [todo, ...prevTodos]);
  };

  const handleEditCat = (id, completed) => {
    setCats((prevTodos) =>
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
    setCats((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleRemoveCompletedTasks = () => {
    setPreventEmptySave(false);
    setCats((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    setCats(JSON.parse(localStorage.getItem('cats')) || []);
  }, []);

  useEffect(() => {
    saveCats();
  }, [cats]);

  return (
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <Header handleAddTodo={handleAddCat} />
        <CatList cats={cats} handleCatEdit={handleCatEdit} handleCatRemove={handleCatRemove} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

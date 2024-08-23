import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { useState, createContext } from 'react';

// context for favorites object
export const FavContext = createContext();

function App() {
  // context for favorites array state
  const [favs, setFavs] = useState([]);

  return (
    <>
      <FavContext.Provider value={{ favs, setFavs }} >
        <AppRouter />
      </FavContext.Provider>
    </>
  )
}

export default App

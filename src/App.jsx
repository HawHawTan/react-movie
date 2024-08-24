import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { createContext } from 'react';
import { toggleFavs } from './context/toggleFavs';
import { isMovieFavorited } from './context/isMovieFavorited';

// context for favorites function
export const FavContext = createContext();

function App() {

  return (
    <>
      <FavContext.Provider value={{ toggleFavs, isMovieFavorited }} >
        <AppRouter />
      </FavContext.Provider>
    </>
  )
}

export default App
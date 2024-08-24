import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { createContext } from 'react';
import { toggleFavs } from './context/toggleFavs';

// context for favorites function
export const FavContext = createContext();

function App() {

  return (
    <>
      <FavContext.Provider value={{ toggleFavs }} >
        <AppRouter />
      </FavContext.Provider>
    </>
  )
}

export default App
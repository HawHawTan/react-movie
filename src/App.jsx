import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { createContext, useState } from 'react';
import { toggleFavs } from './context/toggleFavs';
import { isMovieFavorited } from './context/isMovieFavorited';

// context for favorites function
export const FavContext = createContext();


function App() {
  // this is used for re-rendering page when favourite movie is added, applying same favourite status across all componants using toggleFavs function!
  const [favStatus, setFavStatus] = useState(false);

  return (
    <>
      <FavContext.Provider value={{ toggleFavs, isMovieFavorited, favStatus, setFavStatus }} >
        <AppRouter />
      </FavContext.Provider>
    </>
  )
}

export default App
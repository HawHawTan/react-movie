import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { createContext } from 'react';
import { toggleFavs } from './context/toggleFavs';

// context for favorites function
export const FavContext = createContext();

function App() {
  // context for favorites array state
  // const initialFavs = JSON.parse(localStorage.getItem('favMovieData')) || [];
  // const [favs, setFavs] = useState(initialFavs);

  return (
    <>
      <FavContext.Provider value={{ toggleFavs }} >
        <AppRouter />
      </FavContext.Provider>
    </>
  )
}

export default App


import React from 'react';
import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import MovieContext from './context/MovieContext.jsx';
const testObj = {
  test1: "test 1",
  test2: "test 2"
}
// create context for favs
const FavContext = createContext(testObj);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavContext.Provider value={testObj.test1}>
      <App />
    </FavContext.Provider>
  </React.StrictMode>
)

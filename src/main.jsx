import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FavProvider } from './context/favContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavProvider>
      <App />
    </FavProvider>
  </React.StrictMode>
)

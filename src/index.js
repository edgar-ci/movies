import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// Import main sass file to apply global styles
import './styles/style.scss';
import { AppContextProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

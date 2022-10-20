import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
    https://reactjs.org/docs/strict-mode.html
    strict-mode => Ayuda principalmente a identificar componente y cosas varias (solo se
      aplica en modo desarrollo) 
  */
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
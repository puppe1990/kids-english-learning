import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Alphabet from './Alphabet';
import Number from './Number';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Alphabet />
    <Number />
  </React.StrictMode>
);

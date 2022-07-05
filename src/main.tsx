import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirstApp title='Alex' subtitle='I am a subtitle' />
  </React.StrictMode>
)

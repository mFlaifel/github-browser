import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Components } from './components/Components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

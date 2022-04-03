import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Components } from './pages/Components';
import { Landing } from './pages/Landing';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/github' element={<Home />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

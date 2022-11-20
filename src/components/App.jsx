import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { Home } from 'components/Home/Home';
// import { fetchApi } from 'api/fetchApi';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <AppBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};

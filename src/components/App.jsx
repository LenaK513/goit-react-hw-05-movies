import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
// import { fetchApi } from 'api/fetchApi';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movies" element={<div>Movies</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { Home } from 'components/Home/Home';
// import { fetchApi } from 'api/fetchApi';
import { AppBar } from './AppBar/AppBar';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <nav>
        <AppBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>

        {/* </Route> */}
      </Routes>
    </div>
  );
};

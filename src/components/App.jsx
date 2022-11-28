import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Review } from './Reviews/Reviews';
import { NotFound } from 'pages/NotFound/NotFound';

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <nav>
        <AppBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

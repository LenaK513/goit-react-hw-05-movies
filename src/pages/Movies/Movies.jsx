import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesArray } from 'components/MoviesArray/MoviesArray';
import { getMoviesBySearch } from 'api/fetchApi';
import { FormSearch } from 'components/FormSearch/FormSearch';
// import { NavItemStyled, MoviesList, MovieItem } from './Movies.styled';

export const Movies = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMoviesBySearch(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = query => {
    // setQuery(query);
    setSearchParams(query !== '' ? { query: query } : {});
  };

  return (
    <div>
      <FormSearch dataForm={handleSubmit} />
      {movies.length > 0 && <MoviesArray movies={movies} />}
      <Outlet />
    </div>
  );
};

Movies.propTypes = {
  handleSubmit: PropTypes.func,
};

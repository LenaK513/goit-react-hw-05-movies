import React, { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'api/fetchApi';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { NavItemStyled, MoviesList, MovieItem } from './Movies.styled';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
      <MoviesList>
        {movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <NavItemStyled to={`${id}`} state={{ from: location }}>
              {title}
            </NavItemStyled>
          </MovieItem>
        ))}
      </MoviesList>
      <Outlet />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import { getMoviesBySearch } from 'api/fetchApi';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { NavItemStyled, MoviesList, MovieItem } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      getMoviesBySearch(query)
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => console.log(error.message));
    }
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);
  };

  return (
    <div>
      <FormSearch dataForm={handleSubmit} />
      <MoviesList>
        {movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <NavItemStyled>{title}</NavItemStyled>
          </MovieItem>
        ))}
      </MoviesList>
    </div>
  );
};

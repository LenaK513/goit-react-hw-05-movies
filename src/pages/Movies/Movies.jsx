import React, { useState, useEffect } from 'react';
import { Form, Input, Btn } from './Movies.styled';
import { getMoviesBySearch } from 'api/fetchApi';
import { NavLink } from 'react-router-dom';
export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      getMoviesBySearch(query)
        .then(data => {
          setMovies([data.results]);
        })
        .catch(error => console.log(error.message));
    }
  }, [query]);

  const handleMovieName = event => {
    setQuery(event.currentTarget.value.toLowerCase());
    // console.log(event.currentTarget);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setQuery(event.currentTarget);
    if (query.trim() === '') {
      return;
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleMovieName} />
        <Btn type="submit" value="Search" />
      </Form>

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id} id={id}>
            <NavLink>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

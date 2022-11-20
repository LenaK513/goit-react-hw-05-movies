import React, { useState, useEffect } from 'react';
import { Form, Input, Btn } from './Movies.styled';
import { getMoviesBySearch } from 'api/fetchApi';
export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesBySearch(query).then(data => {
      if (query) {
        setMovies([data.results]);
      }
    });
  }, [query]);

  const handleMovieName = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleMovieName} />
      <Btn type="submit" value="Search"></Btn>
    </Form>
  );
};

import React, { useState, useEffect } from 'react';
import { Form, Input, Btn } from './Movies.styled';
import { getMoviesBySearch } from 'api/fetchApi';
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
    console.log(query);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(query);
    console.log(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={query} onChange={handleMovieName} />
      <Btn type="submit" value="Search"></Btn>
    </Form>
  );
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Btn } from './FormSearch.styled';

export const FormSearch = ({ dataForm }) => {
  const [query, setQuery] = useState('');

  const handleMovieName = event => {
    setQuery(event.currentTarget.value.toLowerCase());
    // console.log(event.currentTarget);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }
    setQuery('');
    dataForm(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={query} onChange={handleMovieName} />
      <Btn type="submit" value="Search" />
    </Form>
  );
};

FormSearch.propTypes = {
  handleSubmit: PropTypes.func,
  handleMovieName: PropTypes.func,
};

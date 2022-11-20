import React from 'react';
import { Form, Input, Btn } from './Movies.styled';

export const Movies = () => {
  return (
    <Form>
      <Input type="text" />
      <Btn type="submit" value="Search"></Btn>
    </Form>
  );
};

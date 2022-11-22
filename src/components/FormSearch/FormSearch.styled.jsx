import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
`;

export const Input = styled.input`
  border-radius: 4px;

  border: 1px solid #343333;
  &:hover,
  &:focus,
  &:active {
    border-color: #f94ae7;
  }
`;

export const Btn = styled.input`
  margin-left: 5px;
  border-radius: 4px;
  width: 70px;

  background-color: #343333;
  color: #fff;

  &:hover {
    background-color: #f94ae7;
    color: #343333;
    font-weight: 700;
  }
`;

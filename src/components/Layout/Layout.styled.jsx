import styled from '@emotion/styled';

export const Header = styled.header`
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 50px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ListLink = styled.a`
  text-decoration: none;
  color: #343333;
  &:hover,
  &:focus {
    color: #f94ae7;
  }
`;

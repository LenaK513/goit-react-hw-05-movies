import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Title = styled.h2`
  padding-left: 20px;
`;

export const MoviesList = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  margin-bottom: 7px;
  color: orangered;
`;

export const NavItemStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  color: #343333;
  &:hover,
  &:focus {
    color: #f94ae7;
  }
`;

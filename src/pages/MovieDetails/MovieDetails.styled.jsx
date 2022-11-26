import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  color: #343333;
  &:hover,
  &:focus {
    color: #f94ae7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Image = styled.img`
  margin-right: 10px;
  margin-left: 5px;
  width: 200px;
`;

export const Title = styled.h2`
  font-weight: 700;
  color: #343333;
`;

export const Overview = styled.h3`
  font-weight: 700;
  color: #343333;
`;
export const TitleAdd = styled.h4`
  font-weight: 700;
  color: #343333;
`;

export const Text = styled.p`
  color: #343333;
`;

export const WrapperAddInfo = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const ListForAddInfo = styled.ul`
  list-style: square;
`;

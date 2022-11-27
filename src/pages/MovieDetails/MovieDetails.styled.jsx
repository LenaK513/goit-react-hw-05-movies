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

export const BtnLink = styled(NavLink)`
  text-decoration: none;
  background-color: #f2efef;
  color: #343333;
  margin-left: 5px;
  padding-left: 2px;
  padding-right: 2px;
  margin-top: 5px;
  /* border-radius: 3px; */
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #f94ae7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 4px;
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
  font-family: Roboto;
  font-size: 18px;
`;

export const WrapperAddInfo = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const ListForAddInfo = styled.ul`
  list-style: square;
`;

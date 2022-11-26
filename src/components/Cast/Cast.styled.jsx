import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  width: 100px;
`;

export const TextName = styled.p`
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 7px;
`;

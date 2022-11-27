import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  width: 130px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 130px;
`;

export const TextName = styled.p`
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 7px;
`;

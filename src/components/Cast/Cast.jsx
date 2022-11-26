import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchApi';
import { Image, List, ListItem, Text, TextName } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(data => setCastList(data.cast))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <List>
        {castList.length > 0 &&
          castList.map(({ id, name, profile_path, character }) => (
            <ListItem key={id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <TextName>{name}</TextName>
              <Text>{character}</Text>
            </ListItem>
          ))}
      </List>

      <Outlet />
    </div>
  );
};

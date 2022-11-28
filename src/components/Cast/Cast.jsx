import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchApi';
import { Image, List, ListItem, Text, TextName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    if (movieId) {
      getCast(Number(movieId))
        .then(data => setCastList(data.cast))
        .catch(error => console.log(error.message));
    }
    if (movieId === null) {
      return;
    }
  }, [movieId]);

  return (
    <List>
      {castList.length > 0 &&
        castList.map(({ id, name, profile_path, character }) => (
          <ListItem key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `https://via.placeholder.com/100x150`
              }
              alt={name}
            />
            <TextName>{name}</TextName>
            <Text>{character || 'No info'}</Text>
          </ListItem>
        ))}
    </List>
  );
};
//
export default Cast;

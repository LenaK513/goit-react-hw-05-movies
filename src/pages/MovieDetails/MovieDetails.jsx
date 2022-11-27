import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'api/fetchApi';

import {
  Wrapper,
  Image,
  Overview,
  Title,
  Text,
  WrapperAddInfo,
  TitleAdd,
  ListForAddInfo,
  NavItem,
  BtnLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backToPageBtn = location.state?.from ?? '/movies';

  useEffect(() => {
    if (movieId) {
      getMovie(Number(movieId))
        .then(data => setMovie(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <BtnLink to={backToPageBtn}>⬅Go back</BtnLink>
      <Wrapper>
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `https://via.placeholder.com/200x100`
          }
          alt="{movie.title || movie.name || 'No title'}"
        />
        <div>
          <Title>
            {movie.title}(
            {new Date(movie.release_date).getFullYear() || 'No info'})
          </Title>
          <Overview>Overview</Overview>
          <Text>{movie.overview}</Text>
          <h4>Genres</h4>

          {(movie.genres && movie.genres.map(g => g.name).join(', ')) ||
            'No genres info'}
        </div>
      </Wrapper>
      <WrapperAddInfo>
        <TitleAdd>Additional information</TitleAdd>
        <ListForAddInfo>
          <li>
            <NavItem to="cast">Cast</NavItem>
          </li>
          <li>
            <NavItem to="reviews"> Reviews</NavItem>
          </li>
        </ListForAddInfo>
      </WrapperAddInfo>
      <Outlet />
    </div>
  );
};

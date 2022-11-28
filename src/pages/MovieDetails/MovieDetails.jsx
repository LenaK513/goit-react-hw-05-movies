import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
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

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backToPageBtn = location.state?.from ?? '/';

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

  const { poster_path, title, release_date, overview, genres } = movie;
  return (
    <div>
      <BtnLink to={backToPageBtn}>⬅Go back</BtnLink>
      <Wrapper>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `https://via.placeholder.com/200x100`
          }
          alt="{movie.title || movie.name || 'No title'}"
        />
        <div>
          <Title>
            {title}({new Date(release_date).getFullYear() || 'No info'})
          </Title>
          <Overview>Overview</Overview>
          <Text>{overview}</Text>
          <h4>Genres</h4>

          {(genres && movie.genres.map(g => g.name).join(', ')) ||
            'No genres info'}
        </div>
      </Wrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
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
      </Suspense>
    </div>
  );
};
export default MovieDetails;

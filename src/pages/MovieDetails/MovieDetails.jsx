import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie, getGenres } from 'api/fetchApi';

import { Wrapper, Image, Overview, Title, Text } from './MovieDetails.styled';

export const MovieDetails = () => {
  // return <div>moviedetails</div>;
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // console.log(movieId);
    if (movieId) {
      getMovie(movieId)
        .then(data => setMovie(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);
  console.log(genres);
  return (
    <div>
      <div>
        <button>Go back</button>
        <Wrapper>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
            {/* <p>{genres.map(({ name }) => ({ name })) || 'No genres'}</p> */}
          </div>
        </Wrapper>

        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

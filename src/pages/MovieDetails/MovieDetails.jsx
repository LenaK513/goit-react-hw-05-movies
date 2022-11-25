import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'api/fetchApi';

import { Wrapper, Image, Overview, Title, Text } from './MovieDetails.styled';

export const MovieDetails = () => {
  // return <div>moviedetails</div>;
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // console.log(movieId);
    if (movieId) {
      getMovie(movieId)
        .then(data => setMovie(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);

  function getGenres(genre_ids, maxGenresShown) {
    const genres = JSON.parse(localStorage.getItem('genres'));
    const genresArr = [];

    for (
      let genreIndex = 0;
      genreIndex < maxGenresShown && genreIndex < movie.genre_ids.length;
      genreIndex++
    ) {
      for (const value of genres) {
        if (movie.genre_ids[genreIndex] === value.id) {
          genresArr.push(value.name);
        }
      }
    }
    if (movie.genre_ids.length > maxGenresShown) {
      genresArr.splice(maxGenresShown - 1, 1, 'Other');
    }
    return genresArr.join(', ');
  }

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
            <p>{movie.genre_ids || 'No genres'}</p>
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

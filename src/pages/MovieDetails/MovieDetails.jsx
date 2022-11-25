import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'api/fetchApi';

export const MovieDetails = () => {
  // return <div>moviedetails</div>;
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log(movieId);
    if (movieId) {
      getMovie(movieId)
        .then(data => setMovie(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <img src="" alt="" />
      <h2>Title{movie.title}</h2>
      <p>Overview{movie.overview}</p>
      <p>Genres{movie.genre_ids}</p>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
      <Outlet />
    </div>
  );
};

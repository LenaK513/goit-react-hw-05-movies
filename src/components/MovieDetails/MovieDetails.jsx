import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'api/fetchApi';

export const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   if (movieId) {
  //     getMovie(movieId)
  //       .then(data => {
  //         setMovie(data.results);
  //       })
  //       .then(setMovie)
  //       .then(console.log)
  //       .catch(error => console.log(error.message));
  //   }
  // }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <img src="" alt="" />
          <h2>Title{movie.title}</h2>
          <p>Overview{movie.overview}</p>
          <p>Genres{movie.genre_ids}</p>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
};

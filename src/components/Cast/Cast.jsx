import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'api/fetchApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(data => setCastList(data.cast))
      // .then(data => console.log(data.cast))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <ul>
        <div>
          {castList.length > 0 &&
            castList.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
        </div>
      </ul>

      <Outlet />
    </div>
  );
};

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavItemStyled, MoviesList, MovieItem } from './MoviesArray.styled';

export const MoviesArray = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MoviesList>
        {movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <NavItemStyled to={`${id}`} state={{ from: location }}>
              {title}
            </NavItemStyled>
          </MovieItem>
        ))}
      </MoviesList>
    </div>
  );
};

MoviesArray.propTypes = {
  movies: PropTypes.array.isRequired,
};

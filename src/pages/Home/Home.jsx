import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/fetchApi';
import { Outlet, useLocation } from 'react-router-dom';
import { Title, MoviesList, MovieItem, NavItemStyled } from './Home.styled';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(data => setTrendMovies(data.results));
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList>
        {trendMovies.map(({ id, title }) => (
          <MovieItem key={id}>
            <NavItemStyled to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavItemStyled>
          </MovieItem>
        ))}
      </MoviesList>
      <Outlet />
    </div>
  );
};

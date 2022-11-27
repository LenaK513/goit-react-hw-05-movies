import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/fetchApi';
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
        {trendMovies &&
          trendMovies.map(({ id, title }) => (
            <MovieItem key={id}>
              <NavItemStyled to={`movies/${id}`} state={{ from: location }}>
                {title}
              </NavItemStyled>
            </MovieItem>
          ))}
      </MoviesList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/fetchApi';
// import { NavLink } from 'react-router-dom';
import { Title, MoviesList, MovieItem, NavItemStyled } from './Home.styled';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrendMovies(data.results));
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList>
        {trendMovies.map(({ id, title }) => (
          <MovieItem key={id}>
            <NavItemStyled>{title}</NavItemStyled>
          </MovieItem>
        ))}
      </MoviesList>
      <Outlet />
    </div>
  );
};

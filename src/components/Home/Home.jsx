import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/fetchApi';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Title, MoviesList, MovieItem, NavItemStyled } from './Home.styled';

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

// export const Home = () => {
//   const [trendMovies, setTrendMovies] = useState([]);

//   useEffect(() => {
//     getTrendingMovies().then(data => setTrendMovies(data.results));
//   }, []);

//   return (
//     <div>
//       <Layout />
//       <div>
//         <Title>Trending Today</Title>
//         <MoviesList>
//           {trendMovies.map(({ id, title }) => (
//             <MovieItem key={id}>
//               <NavItemStyled>{title}</NavItemStyled>
//             </MovieItem>
//           ))}
//         </MoviesList>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// import { NavLink } from 'react-router-dom';
import { NavItemStyled, Wrapper } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export function AppBar() {
  return (
    <Wrapper>
      {navItems.map(({ href, text }) => (
        <NavItemStyled to={href} key={href}>
          {' '}
          {text}{' '}
        </NavItemStyled>
      ))}
    </Wrapper>
  );
}

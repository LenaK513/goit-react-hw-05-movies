import { NavLink } from 'react-router-dom';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export function AppBar() {
  return (
    <div>
      {navItems.map(({ href, text }) => (
        <NavLink to={href} key={href}>
          {' '}
          {text}{' '}
        </NavLink>
      ))}
    </div>
  );
}

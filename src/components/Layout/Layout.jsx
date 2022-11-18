import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

import { Header } from './Layout.styled';

export function Layout() {
  return (
    <Header>
      <AppBar />
      <Outlet />
      {/* <List>
        <ListItem>
          <ListLink ListLink href="http://">
            Home
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink ListLink href="http://">
            Movies
          </ListLink>
        </ListItem>
      </List> */}
    </Header>
  );
}

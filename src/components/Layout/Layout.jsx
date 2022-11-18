import { Header, List, ListItem, ListLink } from './Layout.styled';

export function Layout() {
  return (
    <Header>
      <List>
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
      </List>
    </Header>
  );
}

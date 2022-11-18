import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

import { Header } from './Layout.styled';

export function Layout() {
  return (
    <div>
      <Header>
        <AppBar />
      </Header>
      <Outlet />
    </div>
  );
}

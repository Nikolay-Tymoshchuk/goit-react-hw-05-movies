import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Pulsar } from '@uiball/loaders';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Pulsar color="#ff4500" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

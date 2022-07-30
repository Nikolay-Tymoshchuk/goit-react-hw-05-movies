import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import { Pulsar } from '@uiball/loaders';
import Navigation from '../navigation/Navigation';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Pulsar color="#ff4500" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

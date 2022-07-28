import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Navigation } from './navigation';
import * as lazyRoutes from '../helpers/lazyLoadComponents';

export const App = () => {
  const { Home, Movies, MovieDetails, Cast, Reviews } = lazyRoutes;
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

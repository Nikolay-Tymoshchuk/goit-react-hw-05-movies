import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Navigation } from './navigation';
import { ToastContainer } from 'react-toastify';
import { toastifyOptions } from 'helpers/toastifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import * as lazyRoutes from '../helpers/lazyLoadComponents';

const { Home, Movies, MovieDetails, Cast, Reviews } = lazyRoutes;

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer {...toastifyOptions} />
    </Container>
  );
};

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toastifyOptions } from 'helpers/toastifyOptions';
import SharedLayout from './shared-layout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import * as lazyRoutes from '../helpers/lazyLoadComponents';

const { Home, Movies, MovieDetails, Cast, Reviews } = lazyRoutes;

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer {...toastifyOptions} />
    </>
  );
};

import { lazy } from 'react';

const createAsyncComponent = componentPass => lazy(() => import(componentPass));

const lazyRoutes = {
  Home: createAsyncComponent('../pages/home'),
  Movies: createAsyncComponent('../pages/movies'),
  MovieDetails: createAsyncComponent('../components/movie-details'),
  Cast: createAsyncComponent('../components/cast'),
  Reviews: createAsyncComponent('../components/reviews'),
};

export default lazyRoutes;

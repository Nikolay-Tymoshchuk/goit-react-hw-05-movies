import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import lazyRoutes from '../helpers/lazyLoadComponents';

const { Home, Movies, MovieDetails, Cast, Reviews } = lazyRoutes;

export const App = () => {
  console.log('b :>> ', lazyRoutes);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};

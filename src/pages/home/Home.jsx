import { getTrending } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import FilmsList from 'components/films-list';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <FilmsList films={movies} />}
    </>
  );
};

export default Home;

import { getTrending } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import FilmsList from 'components/films-list';
import { Pulsar } from '@uiball/loaders';
import { normalizerIncomingFilmListData } from 'helpers/normalizers';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(data => {
      setMovies(normalizerIncomingFilmListData(data.results));
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {!movies && <Pulsar />}
      {movies && <FilmsList films={movies} />}
    </>
  );
};

export default Home;

import { getTrending } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import { Pulsar } from '@uiball/loaders';
import { normalizerIncomingFilmListData } from 'helpers/normalizers';
import { toast } from 'react-toastify';
import FilmsList from 'components/films-list';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(normalizerIncomingFilmListData(data.results));
      })
      .catch(() => {
        toast.error('Oops.Something went wrong');
        setMovies([]);
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

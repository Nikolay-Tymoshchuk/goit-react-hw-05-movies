import { useState, useEffect } from 'react';
import FilmsList from 'components/films-list';
import Form from 'components/search-form';
import { useSearchParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { getSearchMovie } from 'api/tmdbApi';
import { toast } from 'react-toastify';
import { normalizerIncomingFilmListData } from 'helpers/normalizers';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;

    getSearchMovie(search)
      .then(data => {
        const { results } = data;
        if (results.length === 0) {
          setMovies(null);
          toast.error('No results found');
          return;
        }
        setMovies(normalizerIncomingFilmListData(results));
      })
      .catch(() => toast.error('Oops.Something went wrong'))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleSearchAndUrlChange = value => {
    setIsLoading(true);
    setSearchParams({ query: value });
  };

  return (
    <>
      <Form onSearch={handleSearchAndUrlChange} />
      {isLoading && <Pulsar />}
      {movies && <FilmsList films={movies} />}
    </>
  );
};

export default Movies;

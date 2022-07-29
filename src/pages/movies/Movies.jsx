import { useState, useEffect } from 'react';
import FilmsList from 'components/films-list';
import { getSearchMovie } from 'api/tmdbApi';
import Form from 'components/search-form';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
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
          toast.error('No results found');
          setMovies(null);
          return;
        }
        setMovies(normalizerIncomingFilmListData(results));
      })
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

import { useState, useEffect } from 'react';
import { getSearchMovie } from 'api/tmdbApi';
import { toast } from 'react-toastify';
import { normalizerIncomingFilmListData } from 'helpers/normalizers';

export const useFetchMoviesList = (searchParams, isLoading) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;
    getSearchMovie(search)
      .then(data => {
        const { results } = data;
        if (results.length === 0) {
          toast.error('No results found');
          setMovies(null);
          return (isLoading.current = false);
        }
        setMovies(normalizerIncomingFilmListData(results));
      })
      .catch(() => toast.error('Oops.Something went wrong'))
      .finally(() => {
        isLoading.current = false;
      });
  }, [isLoading, searchParams]);

  return { movies, isLoading };
};

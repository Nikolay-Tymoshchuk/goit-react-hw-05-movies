import { useState, useEffect } from 'react';
import FilmsList from 'components/films-list';
import { getSearchMovie } from 'api/tmdbApi';
import Form from 'components/search-form';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;
    getSearchMovie(search).then(data => {
      const { results } = data;
      results.length === 0 ? toast.error('No results found') : setMovies(results);
    });
  }, [searchParams]);

  const handleSearchAndUrlChange = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Form onSearch={handleSearchAndUrlChange} />
      {movies && <FilmsList films={movies} />}
    </>
  );
};

export default Movies;

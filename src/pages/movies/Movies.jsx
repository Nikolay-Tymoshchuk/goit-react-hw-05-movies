import { useRef } from 'react';
import FilmsList from 'components/films-list';
import Form from 'components/search-form';
import { useSearchParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { useFetchMoviesList } from 'hooks/useFetchMoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useRef(false);

  const handleSearchAndUrlChange = value => {
    isLoading.current = true;
    setSearchParams({ query: value });
  };

  const { movies } = useFetchMoviesList(searchParams, isLoading);

  console.log('isLoading :>> ', isLoading);
  return (
    <>
      <Form onSearch={handleSearchAndUrlChange} />
      {isLoading.current && <Pulsar />}
      {movies && <FilmsList films={movies} />}
    </>
  );
};

export default Movies;

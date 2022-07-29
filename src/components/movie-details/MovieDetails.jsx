import { useFetchMovie } from 'hooks/hooks';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Pulsar } from '@uiball/loaders';
import { GoBackLink } from './GoBackLink';
import { FilmMainData } from './FilmMainData';
import { AdditionalInformation } from './AdditionalInformation';

function MovieDetails() {
  const location = useLocation();
  const toGoBack = location.state?.from ?? '/movies';

  const movie = useFetchMovie();

  return (
    <>
      {!movie && <Pulsar />}
      {movie && (
        <>
          <GoBackLink history={toGoBack} />
          <FilmMainData options={movie} />
          <AdditionalInformation history={toGoBack} />
          <Suspense fallback={<Pulsar />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetails;

import { useFetchMovie } from 'hooks/hooks';
import { Link, Outlet } from 'react-router-dom';
import { ImageBox, FilmDataBox, GoBack, AdditionalInfo } from './MovieDetails.styled';
import { useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { Suspense } from 'react';

function MovieDetails() {
  const location = useLocation();
  const toGoBack = location.state?.from ?? '/movies';

  const movie = useFetchMovie();

  return (
    <>
      {!movie && <div>Loading...</div>}
      {movie && (
        <>
          <GoBack to={toGoBack}>
            <HiArrowLeft size="24" />
            GO BACK
          </GoBack>
          <FilmDataBox>
            <ImageBox>
              <img src={movie.poster} alt={movie.title} />
            </ImageBox>
            <div>
              <h2>
                {movie.title} {`(${movie.release})`}
              </h2>
              <p>User score: {movie.rating}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres}</p>
            </div>
          </FilmDataBox>
          <AdditionalInfo>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={'cast'} state={{ from: toGoBack }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={'reviews'} state={{ from: toGoBack }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </AdditionalInfo>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetails;

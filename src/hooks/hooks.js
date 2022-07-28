import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'api/tmdbApi';
import { normalizerIncomingFilmData } from 'helpers/normalizers';

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId).then(data => {
      setMovie(normalizerIncomingFilmData(data));
    });
  }, [movieId]);

  return movie;
};

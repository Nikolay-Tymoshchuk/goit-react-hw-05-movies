import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'api/tmdbApi';
import { normalizerIncomingFilmData } from 'helpers/normalizers';
import { toast } from 'react-toastify';

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(data => {
        setMovie(normalizerIncomingFilmData(data));
      })
      .catch(() => {
        toast.error('Bad request');
        navigate('/movies', { replace: true });
      });
  }, [movieId, navigate]);

  return movie;
};

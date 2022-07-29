import { getMovieActors } from 'api/tmdbApi';
import { normalizerIncomingActorsData } from 'helpers/normalizers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Cast.styled';
import { Pulsar } from '@uiball/loaders';
import { CastDetails } from './CastDetails';
import { toast } from 'react-toastify';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActors(movieId)
      .then(data => {
        setActors(normalizerIncomingActorsData(data));
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  }, [movieId]);

  return (
    <>
      {!actors && <Pulsar />}
      {actors && (
        <List>
          {actors.map(({ id, ...item }) => (
            <CastDetails key={id} options={item} />
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;

import { getMovieActors } from 'api/tmdbApi';
import { normalizerIncomingActorsData } from 'helpers/normalizers';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ImageBox, Character, List, ListItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActors(movieId).then(data => {
      setCast(normalizerIncomingActorsData(data));
    });
  }, [movieId]);

  console.log('cast :>> ', cast);

  return (
    <>
      {!cast && <div>Loading...</div>}
      {cast && (
        <Suspense fallback={<div>Loading...</div>}>
          <List>
            {cast.map(({ id, character, name, photo }) => (
              <ListItem key={id}>
                <h5>{name}</h5>
                <Character>
                  Character: <i>{character}</i>
                </Character>
                <ImageBox>
                  <img src={photo} alt={name} />
                </ImageBox>
              </ListItem>
            ))}
          </List>
        </Suspense>
      )}
    </>
  );
};

export default Cast;

//

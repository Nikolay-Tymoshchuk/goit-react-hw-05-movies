import { List, ListChild } from './FilmsList.styled';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films && (
        <List>
          {films.map(film => (
            <ListChild key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </ListChild>
          ))}
        </List>
      )}
    </>
  );
};

export default FilmsList;

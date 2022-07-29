import { List, ListChild, LinkFilm } from './FilmsList.styled';
import { useLocation } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';

const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      {films && (
        <List>
          {films.map(film => (
            <ListChild key={film.id}>
              <BiMoviePlay />
              <LinkFilm to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </LinkFilm>
            </ListChild>
          ))}
        </List>
      )}
    </>
  );
};

export default FilmsList;

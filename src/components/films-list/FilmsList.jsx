import PropTypes from 'prop-types';
import { List, ListChild, LinkFilm } from './FilmsList.styled';
import { useLocation } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';

const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films && (
        <List>
          {films.map(({ id, title }) => (
            <ListChild key={id}>
              <BiMoviePlay />
              <LinkFilm to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </LinkFilm>
            </ListChild>
          ))}
        </List>
      )}
    </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FilmsList;

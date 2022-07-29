import PropTypes from 'prop-types';
import { ImageBox, Character, ListItem } from './Cast.styled';

export const CastDetails = ({ options }) => {
  const { name, character, photo } = options;

  return (
    <ListItem>
      <h5>{name}</h5>
      <Character>
        Character: <i>{character}</i>
      </Character>
      <ImageBox>
        <img src={photo} alt={name} />
      </ImageBox>
    </ListItem>
  );
};

CastDetails.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

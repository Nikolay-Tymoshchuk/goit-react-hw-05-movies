import PropTypes from 'prop-types';
import { ListItem, ImageBox, AuthorDetails, Author, Review } from './Review.styled';

export const ReviewDetails = ({ options }) => {
  const { author, content, avatar } = options;
  return (
    <ListItem>
      <AuthorDetails>
        <ImageBox>
          <img src={avatar} alt={author} />
        </ImageBox>
        <Author>{author}</Author>
      </AuthorDetails>
      <Review>{content}</Review>
    </ListItem>
  );
};

ReviewDetails.propTypes = {
  options: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

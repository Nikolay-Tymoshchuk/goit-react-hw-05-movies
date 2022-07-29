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

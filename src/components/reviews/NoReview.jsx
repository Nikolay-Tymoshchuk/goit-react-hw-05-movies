import { ImFileEmpty } from 'react-icons/im';
import { NoReviewBox } from './Review.styled';

export const NoReview = () => {
  return (
    <NoReviewBox>
      <ImFileEmpty size={32} />
      <p>There is no reviews yes</p>
    </NoReviewBox>
  );
};

import { getMovieReviews } from 'api/tmdbApi';
import { normalizerIncomingReviewsData } from 'helpers/normalizers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewDetails } from './ReviewDetails';
import { List } from './Review.styled';
import { Pulsar } from '@uiball/loaders';
import { toast } from 'react-toastify';
import { NoReview } from './NoReview';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setReviews(normalizerIncomingReviewsData(data));
      })
      .catch(() => toast.error('Something went wrong'));
  }, [movieId]);

  return (
    <>
      {!reviews && <Pulsar />}
      {reviews && reviews.length === 0 && <NoReview />}
      {reviews && (
        <List>
          {reviews.map(({ id, ...review }) => (
            <ReviewDetails key={id} options={review} />
          ))}
        </List>
      )}
    </>
  );
};

export default Reviews;

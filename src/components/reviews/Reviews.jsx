import { getMovieReviews } from 'api/tmdbApi';
import { normalizerIncomingReviewsData } from 'helpers/normalizers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewDetails } from './ReviewDetails';
import { List } from './Review.styled';
import { Pulsar } from '@uiball/loaders';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(normalizerIncomingReviewsData(data));
    });
  }, [movieId]);

  return (
    <>
      {!reviews && <Pulsar />}
      {reviews && reviews.length === 0 && <div>There are no review yet</div>}
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

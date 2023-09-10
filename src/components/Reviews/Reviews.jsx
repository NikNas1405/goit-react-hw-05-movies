import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmReviewsByID } from '../../utils/get-api';
import { ReviewsList, ReviewsListItem, Author, Text } from './Reviews.styled';
import Loader from '../../components/Loader/Loader';
import { Error } from '../../components/GlobalStyle';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews(id) {
      setLoading(true);
      try {
        const response = await getFilmReviewsByID(id);

        if (response.total_results === 0) {
          setNoResults(true);
        }

        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews(id);
  }, [id]);

  return (
    <section>
      {loading && <Loader />}
      {noResults ? (
        <Error>We don't have any reviews for this movie.</Error>
      ) : (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsListItem key={id}>
              <Author>Author: {author}</Author>
              <Text>{content}</Text>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
    </section>
  );
};

export default Reviews;

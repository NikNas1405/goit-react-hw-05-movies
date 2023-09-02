import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmReviewsByID } from '../../utils/get-api';
// import { CastWrapper, CastList, CastListItem, Image } from './Cast.styled';
import Loader from '../../components/Loader/Loader';

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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews(id);
  }, [id]);

  return (
    <section>
      {loading && <Loader />}
      {noResults ? (
        <h2>Sorry. We don't have any reviews for this movie.</h2>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
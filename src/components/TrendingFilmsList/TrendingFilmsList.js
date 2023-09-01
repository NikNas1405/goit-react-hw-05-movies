import { Link } from 'react-router-dom';
// import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const TrendsMoviesList = ({ trendsMovies }) => {
  return (
    <>
      {trendsMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} id={movie.id} className="movie-item">
            {movie.title || movie.original_title}
          </Link>
        </li>
      ))}
    </>
  );
};

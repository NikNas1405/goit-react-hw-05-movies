import {
  FilmsItemStyled,
  LinkStyled,
  Title,
  ImageHolder,
} from './FilmsList.styled';

import { useLocation } from 'react-router-dom';

export const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(movie => (
        <FilmsItemStyled key={movie.id}>
          <LinkStyled
            to={`/movie/${movie.id}`}
            id={movie.id}
            className="movie-item"
            state={{ from: location }}
          >
            <ImageHolder>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29376.png'
                }
                alt={movie.title}
              />
            </ImageHolder>
            <Title>{movie.title || movie.original_title}</Title>
          </LinkStyled>
        </FilmsItemStyled>
      ))}
    </>
  );
};

import {
  FilmsListStyled,
  FilmsItemStyled,
  LinkStyled,
  Title,
  ImageHolder,
} from './FilmsList.styled';

import { useLocation } from 'react-router-dom';

export const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <FilmsListStyled>
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
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt={movie.title}
              />
            </ImageHolder>
            <Title>{movie.title || movie.original_title}</Title>
          </LinkStyled>
        </FilmsItemStyled>
      ))}
    </FilmsListStyled>
  );
};

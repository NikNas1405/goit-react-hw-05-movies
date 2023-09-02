import {
  TrendsMovieItemStyled,
  LinkStyled,
  Title,
} from './TrendingFilmsList.styled';

export const TrendsMoviesList = ({ trendsMovies }) => {
  return (
    <>
      {trendsMovies.map(movie => (
        <TrendsMovieItemStyled key={movie.id}>
          <LinkStyled
            to={`/movie/${movie.id}`}
            id={movie.id}
            className="movie-item"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="100px"
              height="auto"
            />
            <Title>{movie.title || movie.original_title}</Title>
          </LinkStyled>
        </TrendsMovieItemStyled>
      ))}
    </>
  );
};

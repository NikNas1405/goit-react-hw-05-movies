import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getYear } from 'date-fns';
import Loader from '../Loader/Loader';
import {
  Movie,
  LinkStyled,
  SectionAddTitle,
  ImageHolder,
  FilmDescription,
  Title,
  SubTitle,
  Text,
  GenresList,
  GenresItem,
} from './MovieDetails.styled';

const MovieDetails = ({ film }) => {
  const { genres, title, overview, poster_path, vote_average, release_date } =
    film;

  const userScore = vote_average * 10;
  const year = getYear(new Date(release_date));

  return (
    <>
      <Movie>
        <ImageHolder>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29376.png'
            }
            alt={title}
          />
        </ImageHolder>

        <FilmDescription>
          <Title>
            {title} ({year})
          </Title>

          {vote_average ? (
            <Text>User Score: {userScore.toFixed(0)} %</Text>
          ) : (
            <Text>User Score: {vote_average}</Text>
          )}
          <SubTitle>Overview</SubTitle>
          {overview ? (
            <Text>{overview}</Text>
          ) : (
            <Text>Sorry, we can`t get any information about it.</Text>
          )}
          <SubTitle>Genres</SubTitle>
          <GenresList>
            {genres &&
              genres.map(({ id, name }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </GenresList>
        </FilmDescription>
      </Movie>
      <hr />
      <div>
        <SectionAddTitle>Additional information</SectionAddTitle>
        <ul>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;

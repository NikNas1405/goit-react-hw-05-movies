// import { Suspense, useState, useEffect } from 'react';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getYear } from 'date-fns';
import { getFilmByID } from '../../utils/get-api';
import { Error } from '../../components/GlobalStyle';
import Loader from '../../components/Loader/Loader';
import {
  Movie,
  LinkStyled,
  SectionAddTitle,
  ImageHolder,
  FilmDescription,
  Title,
  SubTitle,
  Text,
  GenresItem,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? '/movie');

  const [film, setFilm] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFilmInformation(id) {
      setLoading(true);
      try {
        const response = await getFilmByID(id);
        setFilm(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setNoResults(true);
      }
    }
    getFilmInformation(id);
  }, [id]);

  const { genres, title, overview, poster_path, vote_average, release_date } =
    film;

  const userScore = vote_average * 10;
  const year = getYear(new Date(release_date));

  return (
    <main>
      {backLinkHref.current !== '/movie' ? (
        <LinkStyled to={backLinkHref.current}>
          <AiOutlineArrowLeft />
          Go back
        </LinkStyled>
      ) : (
        <LinkStyled to={'/'}>
          <AiOutlineArrowLeft />
          Go back
        </LinkStyled>
      )}

      {loading && <Loader />}
      {noResults ? (
        <Error>We don't have any information about this movie.</Error>
      ) : (
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
              <ul>
                {genres &&
                  genres.map(({ id, name }) => (
                    <GenresItem key={id}>{name}</GenresItem>
                  ))}
              </ul>
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
      )}
    </main>
  );
};

export default MovieDetailsPage;

// import { Suspense, useState, useEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getFilmByID } from '../../utils/get-api';
import { Error } from '../../components/GlobalStyle';
import Loader from '../../components/Loader/Loader';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { LinkStyled } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? '/movie');

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    async function getFilmInformation(id) {
      try {
        const response = await getFilmByID(id);
        setFilm(response);
      } catch (error) {
        console.log(error);
        setNoResults(true);
      } finally {
        setLoading(false);
      }
    }
    getFilmInformation(id);
  }, [id]);

  return (
    <main>
      {backLinkHref.current ? (
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
        <MovieDetails film={film} />
      )}
    </main>
  );
};

export default MovieDetailsPage;

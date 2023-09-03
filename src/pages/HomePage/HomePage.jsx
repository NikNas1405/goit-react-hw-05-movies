import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getTrendingFilms } from '../../utils/get-api';
import { FilmsList } from 'components/FilmsList/FilmsList';
import Pagination from '../../components/Pagination/Pagination';
import { TrendsMoviesListStyled } from './HomePage.styled';
import { Error } from '../../components/GlobalStyle';
// import { Button } from '../../components/Button/Button.styled';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [trendsFilms, setTrendsMovies] = useState([]);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  // const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const films = await getTrendingFilms(page);
        setTotalPages(Math.floor(films.total_pages / 20));
        setSearchParams({ page: page });
        setTrendsMovies([...films.results]);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getTrends();
  }, [page, setSearchParams]);

  // const handleLoadMore = () => {
  //   setPage(page => page + 1);
  // };

  return (
    <main>
      <h1>Trending today</h1>
      {error ? (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      ) : (
        <TrendsMoviesListStyled>
          <FilmsList movies={trendsFilms} />
        </TrendsMoviesListStyled>
      )}

      {/* {trendsFilms.length !== 0 && page <= totalPages && (
        <Button onClick={handleLoadMore}>Get more</Button>
      )} */}

      {trendsFilms.length !== 0 && page <= totalPages && !error && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </main>
  );
};
export default HomePage;

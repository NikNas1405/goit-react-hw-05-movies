import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getTrendingFilms } from '../../utils/get-api';
import { FilmsList } from 'components/FilmsList/FilmsList';
import Pagination from '../../components/Pagination/Pagination';
import { Error } from '../../components/GlobalStyle';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [trendsFilms, setTrendsMovies] = useState([]);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
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

  return (
    <main>
      <h1>Trending today</h1>
      {error ? (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      ) : (
        <FilmsList movies={trendsFilms} />
      )}
      {trendsFilms.length !== 0 && page <= totalPages && !error && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </main>
  );
};
export default HomePage;

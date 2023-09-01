import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getTrendingFilms } from '../../utils/get-api';
import { TrendsMoviesList } from 'components/TrendingFilmsList/TrendingFilmsList';
import {Button} from "../../components/Button/Button.styled"

const HomePage = () => {
  const [trendsFilms, setTrendsMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const films = await getTrendingFilms(page);

        setTotalPages(Math.floor(films.total_pages / 20));

        if (page === 1) {
          setTrendsMovies([...films.results]);
        } else {
          setTrendsMovies(prevFilms => [...prevFilms, ...films.results]);

          console.log(page);
        }
      } catch (error) {
        return toast.error(
          'Something went wrong. Please refresh page or try again after some time.'
        );
      }
    };
    getTrends();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <TrendsMoviesList trendsMovies={trendsFilms} />
      </ul>

      {trendsFilms.length !== 0 && page <= totalPages && (
        <Button onClick={handleLoadMore}>Get more</Button>
      )}
    </main>
  );
};
export default HomePage;

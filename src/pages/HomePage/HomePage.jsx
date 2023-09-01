import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getTrendingFilms } from '../../utils/get-api';
import { TrendsMoviesList } from 'components/TrendingFilmsList/TrendingFilmsList';

const HomePage = () => {
  const [trendsFilms, setTrendsMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      // const films = await getTrendingFilms();
      // console.log(films.results);

      try {
        const films = await getTrendingFilms();
        setTrendsMovies([...films.results]);
      } catch (error) {
        return toast.error(
          'Something went wrong. Please refresh page or try again after some time.'
        );
      }
    };
    getTrends();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <TrendsMoviesList trendsMovies={trendsFilms} />
      </ul>
    </main>
  );
};
export default HomePage;

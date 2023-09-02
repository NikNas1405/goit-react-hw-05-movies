import ReactPaginate from 'react-paginate';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getTrendingFilms } from '../../utils/get-api';
import { TrendsMoviesList } from 'components/TrendingFilmsList/TrendingFilmsList';
import { TrendsMoviesListStyled } from './HomePage.styled';
import { PaginationStyled } from '../../components/GlobalStyle';
// import { Button } from '../../components/Button/Button.styled';

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
          // setTrendsMovies(prevFilms => [...prevFilms, ...films.results]);
          setTrendsMovies([...films.results]);
        }
      } catch (error) {
        return toast.error(
          'Something went wrong. Please refresh page or try again after some time.'
        );
      }
    };
    getTrends();
  }, [page]);

  // const handleLoadMore = () => {
  //   setPage(page => page + 1);
  // };

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
    <main>
      <h1>Trending today</h1>
      <TrendsMoviesListStyled>
        <TrendsMoviesList trendsMovies={trendsFilms} />
      </TrendsMoviesListStyled>

      {/* {trendsFilms.length !== 0 && page <= totalPages && (
        <Button onClick={handleLoadMore}>Get more</Button>
      )} */}

      <PaginationStyled>
        <ReactPaginate
          pageCount={totalPages}
          previousLabel={'Back'}
          nextLabel={'Next'}
          breakLabel={'...'}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          subContainerClassName={'pages pagination'}
          breakClassName={'break-me'}
        />
      </PaginationStyled>
    </main>
  );
};
export default HomePage;

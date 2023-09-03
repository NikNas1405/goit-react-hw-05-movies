import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

// import { Link, useLocation } from 'react-router-dom';

import { getFilmsByQuery } from '../../utils/get-api';
import Loader from '../../components/Loader/Loader';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { PaginationStyled } from '../../components/GlobalStyle';

import {
  Input,
  SearchForm,
  Button,
  QueryFilmsListStyled,
} from './MoviesPage.styled';

import { Error } from '../../components/GlobalStyle';

const MoviesPage = () => {
  const [queryFilms, setQueryFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useSearchParams();

  const currentSearch = query.get('query') ?? '';

  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentSearch === '') return;
    const getAskedFilms = async () => {
      setLoading(true);
      try {
        const askedFilms = await getFilmsByQuery(currentSearch, page);
        if (askedFilms.results.length === 0) {
          setLoading(false);
          return;
        }

        setQueryFilms([...askedFilms.results]);
        setTotalPages(Math.floor(askedFilms.total_pages / 20));
        setSearchParams({ page: page, query: currentSearch });
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getAskedFilms();
  }, [page, currentSearch, setSearchParams]);

  const onSubmitSearchForm = event => {
    event.preventDefault();

    const value = event.target.elements.searchQuery.value;

    value.trim() !== '' ? (
      setQuery({ query: value }) && setPage(1) && setTotalPages(0)
    ) : (
      <Error>Please enter film`s title for search</Error>
    );

    event.currentTarget.reset();
  };

  const onButtonSearchFormResetClick = event => {
    setQueryFilms([]);
    setPage(1);
    setQuery('');
    setTotalPages(0);
  };

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
    <main>
      <SearchForm onSubmit={onSubmitSearchForm}>
        <Input
          type="text"
          name="searchQuery"
          placeholder="Find movie..."
          autoComplete="off"
          autoFocus
        />

        <Button type="button" onClick={() => onButtonSearchFormResetClick()}>
          Reset results
        </Button>
      </SearchForm>
      {loading && <Loader />}
      {error ? (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      ) : (
        <QueryFilmsListStyled>
          <FilmsList movies={queryFilms} />
        </QueryFilmsListStyled>
      )}
      {totalPages !== 0 && (
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
            initialPage={page - 1}
          />
        </PaginationStyled>
      )}
    </main>
  );
};

export default MoviesPage;

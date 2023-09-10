import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByQuery } from '../../utils/get-api';
import Loader from '../../components/Loader/Loader';
import { FilmsList } from 'components/FilmsList/FilmsList';
import Pagination from '../../components/Pagination/Pagination';
import { Input, SearchForm, Button } from './MoviesPage.styled';

import { Error } from '../../components/GlobalStyle';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [queryFilms, setQueryFilms] = useState([]);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    const currentSearch = searchParams.get('query') ?? '';
    if (!currentSearch) {
      return;
    }
    const getAskedFilms = async () => {
      setLoading(true);
      try {
        const askedFilms = await getFilmsByQuery(currentSearch, page);
        if (askedFilms.results.length === 0) {
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
  }, [page, searchParams, setSearchParams]);

  const onSubmitSearchForm = event => {
    event.preventDefault();
    const value = event.target.elements.searchQuery.value;
    value.trim() !== '' ? (
      setSearchParams({ query: value })
    ) : (
      <Error>Please enter film`s title for search</Error>
    );
    setPage(1);
    setTotalPages(0);
    event.currentTarget.reset();
  };

  const onButtonSearchFormResetClick = () => {
    setQueryFilms([]);
    setPage(1);
    setSearchParams({ query: '' });
    setTotalPages(0);
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
        <FilmsList movies={queryFilms} />
      )}
      {totalPages !== 0 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </main>
  );
};

export default MoviesPage;

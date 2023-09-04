import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByQuery } from '../../utils/get-api';
import Loader from '../../components/Loader/Loader';
import { FilmsList } from 'components/FilmsList/FilmsList';
import Pagination from '../../components/Pagination/Pagination';
import { Input, SearchForm, Button } from './MoviesPage.styled';

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

    if (value !== currentSearch) {
      setPage(1);
      setTotalPages(0);
    }

    value.trim() !== '' ? (
      setQuery({ query: value })
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

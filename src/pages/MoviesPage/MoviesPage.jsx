import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmsByQuery } from '../../utils/get-api';

import { PaginationStyled } from '../../components/GlobalStyle';

const MoviesPage = () => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [askedFilms, setAskedFilms] = useState([]);

  //записуємо введене значення в стейт
  const onChangeSearchBarComponent = event => {
    setTitle(event.currentTarget.value.toLowerCase());
  };

  // Передаємо в App значення нового value і очищуємо форму
  const onSubmitSearchBarComponent = event => {
    event.preventDefault();

    if (title.trim() === '') {
      return toast.error('Please enter film`s title for search');
    }

    handleSearchSubmit(title);

    // очищуємо форму вводу
    setTitle('');
  };

  const handleSearchSubmit = title => {
    setTitle(title);
    setPage(1);
    setAskedFilms([]);
  };

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
    <main>
      <input
        type="text"
        // value={ }
        onChange={e => console.log(e.target.value)}
      />

      <ul>
        {/* {visibleFilms.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              <img src="https://via.placeholder.com/200x100" alt="" />
              <h2>{film.title}</h2>
            </Link>
          </li>
        ))} */}
      </ul>
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
          />
        </PaginationStyled>
      )}
    </main>
  );
};

export default MoviesPage;

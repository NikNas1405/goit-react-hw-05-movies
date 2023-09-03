import ReactPaginate from 'react-paginate';
import { PaginationStyled } from './Pagination.styled';

export const Pagination = ({ totalPages, setPage, page }) => {
  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
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
  );
};

export default Pagination;

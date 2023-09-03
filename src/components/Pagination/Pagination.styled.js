import styled from 'styled-components';

export const PaginationStyled = styled.div`
  margin: 50px auto 0;

  .pagination {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    outline: none;
    height: 42px;
  }

  .pagination > li > a {
    border: 1px solid #fff;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    transition: all 250ms ease-out;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #fff;
    border-color: #fff;
    outline: none;
    color: #eb3324;
    padding: 8px 12px;

    box-shadow: 0px 0px 29px 4px rgba(214, 13, 13, 0.41);
    transform: scale(1.1);
  }

  .pagination > li > a,
  .pagination > li > span {
    color: #c8c8c8;
  }

  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;

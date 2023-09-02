import styled, { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #131415;
  /* background: linear-gradient(to left, #131415, #5691c8); */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  
  }

  img {
    display: block;
    width: 100%
  }

  h1 {
  font-weight: 700;
  font-size: 36px;
  color: white;
  margin: 24px 4px;
  text-shadow: 0px 0px 29px 4px rgba(214, 13, 13, 0.41);
}

  .go-back {
  margin-bottom: 8px;
  display: block;
  color: #CF4D73;
  text-decoration:none; 
  font-weight: 12px;
  }

  .go-back:is(:hover , :focus) {
    color: #1134a6;
  }
`;



export const PaginationStyled = styled.div`
  margin: 40px auto;

  .pagination {
    margin: 15px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    outline: none;
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

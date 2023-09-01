import { createGlobalStyle } from 'styled-components';
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

.movie-item {
  margin-bottom: 8px;
  display: block;
  color: #9a9b9b;
  text-decoration:none; 
  }

  .movie-item:is(:hover , :focus) {
    color: white;
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
  

h1 {
 
  font-weight: 700;
  font-size: 36px;
  color: white;
  margin: 12px 4px;
}

p {
  color: #9f9f9f;
}
`;

import styled, { createGlobalStyle, keyframes } from 'styled-components';

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

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Error = styled.div`
  color: white;
  margin: 20px;
`;

// const hue = keyframes`
//  0% {
//    -webkit-filter: hue-rotate(0deg);
//    transform: scale(0.95);
//  }
//  30% {
//    transform: scale(1);
//  }
//  50% {
//  transform: scale(0.95);
//  }
//  70% {
//     transform: scale(1);
//  }
//   100% {
//    -webkit-filter: hue-rotate(-360deg);
//   transform: scale(0.95);
//  }
// `;

const hue = keyframes`
 0% {
   -webkit-filter: hue-rotate(0deg);
 }
  100% {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

export const AnimatedGradientText = styled.h1`
  color: #f35626;
  text-align: center;
  background-image: linear-gradient(92deg, #fff, #1d48f2);
  -webkit-background-clip: text;
  animation: ${hue} 10s infinite linear;
  font-size: 50px;
  line-height: 1.5;
  text-align: center;
  margin: 20px;
`;

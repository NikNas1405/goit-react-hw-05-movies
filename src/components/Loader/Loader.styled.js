import styled, { keyframes } from 'styled-components';

export const LoaderStyled = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 250%;
  background: linear-gradient(180deg, #ccc 0, #fff 100%);
  box-shadow: inset 0 5px 20px white;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

  :is(:after) {
    content: '';
    display: table;
    clear: both;
  }

  > span {
    border-left: 1px solid #fff;
    border-right: 1px solid #ccc;
    float: left;
    height: 100px;
    line-height: 120px;
    width: 50px;
  }
`;

const up = keyframes`
 0% {
    margin-bottom: 0;
  }
  16% {
    margin-bottom: 100%;
    height: 20px;
  }
  50% {
    margin-bottom: 0;
  }
  100% {
    margin-bottom: 0;
  }
`;

export const Covers = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  > span {
    background: linear-gradient(180deg, black 0, #b1b1b1 100%);
    animation: ${up} 2s infinite;
    float: left;
    height: 100px;
    line-height: 120px;
    width: 50px;
  }

  > span:nth-child(2) {
    animation-delay: 0.142857s;
  }
  > span:nth-child(3) {
    animation-delay: 0.285714s;
  }
  > span:nth-child(4) {
    animation-delay: 0.428571s;
  }
  > span:nth-child(5) {
    animation-delay: 0.571428s;
  }
  > span:nth-child(6) {
    animation-delay: 0.714285s;
  }
  > span:nth-child(7) {
    animation-delay: 0.857142s;
  }
`;

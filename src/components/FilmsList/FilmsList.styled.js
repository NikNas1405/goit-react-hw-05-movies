import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 28px;
  justify-content: space-around;
`;

export const FilmsItemStyled = styled.li`
  margin-bottom: 8px;
  display: block;
  overflow: hidden;
  transition: all 250ms ease-out;
  width: 250px;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 28px * 3) / 4);
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 28px * 4) / 5);
  }

  &:is(:hover, :focus) {
    cursor: pointer;
    box-shadow: 0px 0px 29px 4px rgba(214, 13, 13, 0.41);
    transform: scale(1.1);
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #9a9b9b;

  &:is(:hover, :focus) {
    color: white;
  }
`;

export const Title = styled.p`
  color: inherit;
  text-align: center;
`;

export const ImageHolder = styled.div`
  height: 300px;
`;

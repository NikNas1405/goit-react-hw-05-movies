import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendsMovieItemStyled = styled.li`
  margin-bottom: 8px;
  /* max-width: 100px; */
  display: block;
  overflow: hidden;
  transition: all 250ms ease-out;

  flex-basis: calc((100% - 28px * 4) / 5);

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

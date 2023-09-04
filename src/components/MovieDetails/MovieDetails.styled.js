import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Movie = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const ImageHolder = styled.div`
  min-width: 250px;
  overflow: hidden;
  height: 400px;
`;

export const FilmDescription = styled.div`
  max-width: 820px;
  padding: 2px;
`;

export const Title = styled.h2`
  color: white;
  font-weight: 800;
  font-size: 36px;
  text-shadow: 0px 0px 10px #fa1427;
  margin: 0 0 30px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SectionAddTitle = styled.h3`
  margin: 20px 0;
  padding: 0;
  color: white;
  font-weight: 500;
  text-shadow: 0px 0px 2px #fa1427;
`;

export const SubTitle = styled.h3`
  margin: 40px 0 10px;
  padding: 0;
  color: white;
  font-weight: 500;
  text-shadow: 0px 0px 2px #fa1427;
`;

export const Text = styled.p`
  color: #9a9b9b;
  margin: 4px;
`;

export const LinkStyled = styled(Link)`
  margin-bottom: 8px;
  display: block;
  color: #cf4d73;
  text-decoration: none;
  font-weight: 12px;

  :is(:hover, :focus) {
    color: #1134a6;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const GenresItem = styled.li`
  display: inline;
  margin-right: 10px;
  color: #9a9b9b;
`;

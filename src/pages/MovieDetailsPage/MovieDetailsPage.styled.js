import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

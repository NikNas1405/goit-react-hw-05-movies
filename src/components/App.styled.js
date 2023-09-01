import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: #131415;
  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  gap: 12px;
  margin: 0 auto 16px;
  border-bottom: 1px solid black;
  background-color: black;

  > nav {
    display: flex;
    max-width: 960px;
    padding: 0;
    align-items: end;
    gap: 4px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  display: block;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #9a9b9b;
  font-weight: 500;
  height: 40px;
  background-color: #424242;

  &.active {
    color: white;
    background-color: #eb3324;
    height: 44px;
  }
`;

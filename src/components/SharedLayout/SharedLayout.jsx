import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header, Logo, NavLinkStyled, Container } from './SharedLayout.styled';

import logo from '../../utils/Images/logo.jpg';
import Loader from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movie">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

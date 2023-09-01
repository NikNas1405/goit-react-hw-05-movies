import { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header, Logo, NavLinkStyled, Container } from './App.styled';

import logo from './logo.jpg';
import Loader from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function App() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="mission" element={<Cast />} />
            <Route path="team" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
}

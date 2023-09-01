import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviesPage />} />
          <Route path="movie/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

//============================================================
// without <SharedLayout> </SharedLayout> component
//============================================================

// import { lazy, Suspense } from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
// import { Header, Logo, NavLinkStyled, Container } from './App.styled';

// import logo from '../utils/Images/logo.jpg';
// import Loader from './Loader/Loader';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

// export default function App() {
//   return (
//     <Container>
//       <Header>
//         <Link to="/">
//           <Logo src={logo} alt="logo" />
//         </Link>
//         <nav>
//           <NavLinkStyled to="/">Home</NavLinkStyled>
//           <NavLinkStyled to="/movies">Movies</NavLinkStyled>
//         </nav>
//       </Header>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="movies" element={<MoviesPage />} />
//           <Route path="movies/:id" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<HomePage />} />
//         </Routes>
//       </Suspense>
//       <GlobalStyle />
//     </Container>
//   );
// }

import { useState, useEffect, useSearchParams } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

// import { useSearchParams, Link, useLocation } from 'react-router-dom';

import { getFilmsByQuery } from '../../utils/get-api';

import { PaginationStyled } from '../../components/GlobalStyle';

import { Input, SearchForm, Button } from './MoviesPage.styled';

const MoviesPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const title = searchParams.get('title') ?? '';

//   const [quizItems, setQuizItems] = useState([]);

//   useEffect(() => {
//     async function getQuizzes() {
//       try {
//         const quizItems = await getFilmsByQuery();
//         setQuizItems(quizItems);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getQuizzes();
//   }, []);

//   return (
//     <main>
//       <SearchForm onSubmit={onSubmitSearchBarComponent}>
//         <Input
//           type="text"
//           onChange={onChangeSearchBarComponent}
//           value={textForSearch}
//           placeholder="Find movie..."
//           autoComplete="off"
//           autoFocus
//         />
//         {/* <Button
//           type="submit"
//           //   onClick={handleSubmit}
//         >
//           Find
//         </Button> */}
//         <Button
//           type="submit"
//           //   onClick={handleSubmit}
//         >
//           Reset results
//         </Button>
//       </SearchForm>
//       {noResults && (
//         <div>
//           Nothing was found for your search query. Please, try with another one.
//         </div>
//       )}
//       <ul>
//         {/* {visibleFilms.map(film => (
//           <li key={film.id}>
//             <Link to={`${film.id}`} state={{ from: location }}>
//               <img src="https://via.placeholder.com/200x100" alt="" />
//               <h2>{film.title}</h2>
//             </Link>
//           </li>
//         ))} */}
//       </ul>
//       {totalPages !== 0 && (
//         <PaginationStyled>
//           <ReactPaginate
//             pageCount={totalPages}
//             previousLabel={'Back'}
//             nextLabel={'Next'}
//             breakLabel={'...'}
//             marginPagesDisplayed={1}
//             pageRangeDisplayed={4}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//             subContainerClassName={'pages pagination'}
//             breakClassName={'break-me'}
    // initialPage={page - 1}
//           />
//         </PaginationStyled>
//       )}
//     </main>
//   );
};

export default MoviesPage;

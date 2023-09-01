// import { useSearchParams, Link, useLocation } from 'react-router-dom';

// import { getFilmsByQuery } from '../../utils/get-api';

// const MoviesPage = () => {
//   const location = useLocation();

//   const films = getFilmsByQuery();



//   const [searchParams, setSearchParams] = useSearchParams();
//   const filmTitle = searchParams.get('name') ?? '';

//   const visibleFilms = films.filter(film =>
//     film.title.toLowerCase().includes(filmTitle.toLowerCase())
//   );

//   const updateQueryString = title => {
//     const nextParams = title !== '' ? { title } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <main>
//       <input type="text" value={filmTitle} onChange={updateQueryString} />

//       <ul>
//         {visibleFilms.map(film => (
//           <li key={film.id}>
//             <Link to={`${film.id}`} state={{ from: location }}>
//               <img src="https://via.placeholder.com/200x100" alt="" />
//               <h2>{film.title}</h2>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default MoviesPage;

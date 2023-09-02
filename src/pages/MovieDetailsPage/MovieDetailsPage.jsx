import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { getFilmByID } from '../../utils/get-api';

const MovieDetailsPage = () => {
  const { id } = useParams();

  //  console.log(id);
  // const film = getFilmByID(id);
  const location = useLocation();

  // console.log(film);

  const backLinkHref = location?.state?.from ?? '/';

  return (
    <main>
      <Link to={backLinkHref} className="go-back">
        <AiOutlineArrowLeft />
        Go back
      </Link>

      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
        mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
        asperiores facere natus sapiente cum neque laudantium quam, expedita
        voluptates atque quia aspernatur saepe illo, rem quasi praesentium
        aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
        praesentium totam ducimus similique asperiores culpa, eius amet
        repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
        dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
        eaque voluptatibus eveniet error, nulla rem iusto?
      </p>

      {/* <h2>Product - {film.results.title}</h2> */}
      <ul>
        <li>
          <Link to="cast">Read about our mission</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;

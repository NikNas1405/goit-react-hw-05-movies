import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmCastByID } from '../../utils/get-api';
// import { CastWrapper, CastList, CastListItem, Image } from './Cast.styled';
import Loader from '../../components/Loader/Loader';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieCast(id) {
      setLoading(true);
      try {
        const response = await getFilmCastByID(id);
        if (response.cast.length === 0) {
          setNoResults(true);
        }

        setCasts(response.cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast(id);
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {noResults ? (
        <h2>Sorry. We don't have cast information.</h2>
      ) : (
        <ul>
          {casts.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
                  }
                  alt={name}
                  width="120px"
                  height="160px"
                />
              </div>

              <p>{name}</p>
              <p>
                Character:
                <span> {character}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;

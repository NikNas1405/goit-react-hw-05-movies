import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmCastByID } from '../../utils/get-api';
import { CastList, CastListItem, ImageHolder, Name, Text } from './Cast.styled';
import Loader from '../../components/Loader/Loader';
import { Error } from '../../components/GlobalStyle';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFilmCast(id) {
      setLoading(true);
      try {
        const castInfo = await getFilmCastByID(id);
        if (castInfo.cast.length === 0) {
          setNoResults(true);
        }
        setCasts(castInfo.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getFilmCast(id);
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {noResults ? (
        <Error>We don't have any information about casts.</Error>
      ) : (
        <CastList>
          {casts.map(({ id, name, profile_path, character }) => (
            <CastListItem key={id}>
              <ImageHolder>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  }
                  alt={name}
                />
              </ImageHolder>

              <Name>{name}</Name>
              <Text>
                Character:
                <span> {character}</span>
              </Text>
            </CastListItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;

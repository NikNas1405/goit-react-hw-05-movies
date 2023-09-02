import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '69dd57d815b4b29a8f016ba838d3c4d6';

const defaultParams = {
  api_key: API_KEY,
  language: 'en-US',
};

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function getTrendingFilms(page) {
  const options = new URLSearchParams({
    ...defaultParams,
    page: page,
  });
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?${options}`
    );
    // console.log(response.data.results);
    // console.log(response.data.total_pages);
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

// запит повної інформації про фільм для сторінки кінофільму.
export async function getFilmByID(filmsID) {
  const options = new URLSearchParams({
    ...defaultParams,
  });
  try {
    const response = await axios.get(`${BASE_URL}/movie/${filmsID}?${options}`);
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

// запит інформації про акторський склад для сторінки кінофільму.
export async function getFilmCastByID(filmsID) {
  const options = new URLSearchParams({
    ...defaultParams,
  });
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${filmsID}/credits?${options}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}
// запит оглядів для сторінки кінофільму.
export async function getFilmReviewsByID(filmsID) {
  const options = new URLSearchParams({
    ...defaultParams,
  });
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${filmsID}/reviews?${options}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

//пошук фільму за ключовим словом на сторінці фільмів
export async function getFilmsByQuery(query, page) {
  const options = new URLSearchParams({
    ...defaultParams,
    query: query,
    page: page,
  });
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?${options}`);
    return response.data;
  } catch (error) {
    // toast(
    //   'Sorry. No matches found. Please, try again with another search query.'
    // );
  }
}

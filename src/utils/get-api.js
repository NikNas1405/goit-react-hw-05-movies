import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '69dd57d815b4b29a8f016ba838d3c4d6';

const defaultParams = {
  api_key: API_KEY,
  language: 'en-US',
};

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function getTrendingFilms() {
  const options = new URLSearchParams({
    ...defaultParams,
  });
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?${options}`
    );
    return response.data;
  } catch (error) {
    toast.error(
      'Sorry. Something went wrong. Please reload the page to try again.'
    );
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
    toast.error(
      'Sorry. No matches found. Please, try again with another search query.'
    );
  }
}

// запит повної інформації про фільм для сторінки кінофільму.

// запит інформації про акторський склад для сторінки кінофільму.

// запит оглядів для сторінки кінофільму.

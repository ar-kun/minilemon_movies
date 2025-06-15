import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const axiosInstance = axios.create({
 baseURL: BASE_URL,
 headers: {
  Authorization: `Bearer ${API_KEY}`,
  Accept: 'application/json',
 },
});
// id-ID en-US
const movieService = {
 getMovies: async (page = 1, language = 'id-ID') => {
  try {
   const response = await axiosInstance.get('/movie/popular', {
    params: {
     language,
     page,
    },
   });
   return response.data;
  } catch (error) {
   console.error('Error fetching movies:', error);
   throw error;
  }
 },

 searchMovies: async (query, page = 1) => {
  try {
   const response = await axios.get(`${BASE_URL}/search/multi`, {
    headers: {
     Authorization: `Bearer ${API_KEY}`,
    },
    params: {
     query,
     include_adult: false,
     language: 'id-ID',
     page,
    },
   });
   console.log('Search response:', response.data);
   return response.data;
  } catch (error) {
   console.error('Error searching movies:', error);
   throw error;
  }
 },

 getMovieDetail: async (movieId, language = 'en-US') => {
  try {
   const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { language },
   });
   console.log(`Fetched movie ID ${movieId}:`, response.data);
   return response.data;
  } catch (error) {
   console.error(`Error fetching movie ID ${movieId}:`, error);
   throw error;
  }
 },
};

export default movieService;

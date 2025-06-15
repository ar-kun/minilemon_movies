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
 getMovies: async (page = 1, language = 'en-US') => {
  try {
   const response = await axiosInstance.get('/movie/popular', {
    params: {
     language,
     page,
    },
   });
   return response.data;
  } catch (error) {
   console.error('Error fetching popular movies:', error.message);
   return { results: [], total_pages: 0 };
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
     language: 'en-US',
     page,
    },
   });
   return response.data;
  } catch (error) {
   console.error('Error searching movies:', error.message);
   return { results: [], total_pages: 0 };
  }
 },

 getMovieDetail: async (movieId, language = 'en-US') => {
  try {
   const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { language },
   });
   return response.data;
  } catch (error) {
   console.error(`Error fetching details for movie ID ${movieId}:`, error.message);
   return { error: true, message: `Error fetching details for movie ID ${movieId}: ${error.message}` };
  }
 },

 getMovieCast: async (movieId, language = 'en-US') => {
  try {
   const response = await axiosInstance.get(`/movie/${movieId}/credits`, {
    params: { language },
   });
   return response.data;
  } catch (error) {
   console.error(`Error fetching cast for movie ID ${movieId}:`, error.message);
   return { cast: [] };
  }
 },
};

export default movieService;

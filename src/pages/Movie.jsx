import { useEffect, useState } from 'react';
import movieService from '@/services/moviesServices';
import GuestLayout from '@/components/layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import { EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';

const Movie = () => {
 const { i18n } = useTranslation();
 const [movies, setMovies] = useState([]);
 const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1);
 const [searchQuery, setSearchQuery] = useState('');
 const [isSearching, setIsSearching] = useState(false);

 const loadMovies = async () => {
  const data = await movieService.getMovies(page);
  setMovies(data.results);
  setTotalPages(data.total_pages);
 };

 const searchMovies = async () => {
  if (!searchQuery.trim()) {
   setIsSearching(false);
   setPage(1);
   return loadMovies();
  }

  setIsSearching(true);
  const data = await movieService.searchMovies(searchQuery, page);
  setMovies(data.results);
  setTotalPages(data.total_pages);
 };

 useEffect(() => {
  if (isSearching) {
   searchMovies();
  } else {
   loadMovies();
  }
 }, [page]);

 const handleSearch = (e) => {
  e.preventDefault();
  setPage(1);
  searchMovies();
 };

 return (
  <GuestLayout>
   <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row gap-5 md:gap-0  md:items-center mb-8 justify-between">
     <h1 className="text-2xl font-bold">
      <span className="border-b-4 border-third pb-1">Popular</span> Movies
     </h1>
     <form onSubmit={handleSearch} className="flex shadow-md rounded-md overflow-hidden w-full sm:w-1/2 lg:w-1/3">
      <input
       type="text"
       placeholder="Search movies..."
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       className="w-full px-3 py-2 rounded-bl-md rounded-tl-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
      />
      <button
       type="submit"
       className="px-4 py-2 bg-third hover:bg-third/70 text-secondary text-sm rounded-br-md rounded-tr-md font-semibold cursor-pointer"
      >
       Search
      </button>
     </form>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {movies.map((movie) => (
      <div key={movie.id} className="relative rounded-xl shadow-md group dark:bg-secondary dark:text-white">
       <div className="relative overflow-hidden rounded-xl">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster Movie" className="w-full h-auto rounded-xl" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-800/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <Link to={`/movies/${movie.id}`} className="bg-third text-slate-800 hover:bg-third/90 font-medium py-2 px-4 rounded-lg">
          <EyeIcon className="w-5 h-5 inline mr-2" />
          <span>Watch</span>
         </Link>
        </div>
       </div>

       <h2 className="text-lg font-semibold px-5 mt-3">
        {(() => {
         const title = movie.title || movie.name || 'Unknown';
         const w = window.innerWidth;
         const max = w < 640 ? 25 : w < 1024 ? 15 : 30;
         return title.length > max ? title.slice(0, max) + '...' : title;
        })()}
       </h2>
       <div className="flex justify-between space-y-2 mt-2 px-5 pb-5">
        <p className="text-sm text-gray-600 dark:text-gray-400">
         {(() => {
          const w = window.innerWidth;
          const isLaptop = w >= 1024 || w < 640;

          return new Date(movie.release_date).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', {
           year: 'numeric',
           month: isLaptop ? 'long' : '2-digit',
          });
         })()}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
         <StarIcon className="w-4 h-4 inline mr-1 text-yellow-400" />
         {movie.vote_average != null ? `${movie.vote_average.toFixed(1)} (${movie.vote_count ?? 0} votes)` : 'No rating'}
        </p>
       </div>
      </div>
     ))}
    </div>
    <div className="mt-8 flex justify-center items-center space-x-4">
     <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
      className="px-4 py-2 bg-third text-slate-800 hover:bg-third/70 rounded disabled:opacity-50"
     >
      Previous
     </button>
     <span className="dark:text-white">
      Page {page} of {totalPages}
     </span>
     <button
      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={page === totalPages}
      className="px-4 py-2 bg-third text-slate-800 hover:bg-third/70 rounded disabled:opacity-50"
     >
      Next
     </button>
    </div>
   </div>
  </GuestLayout>
 );
};

export default Movie;

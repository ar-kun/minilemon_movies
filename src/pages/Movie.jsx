import { useEffect, useState } from 'react';
import movieService from '@/services/moviesServices';
import GuestLayout from '@/components/layouts/GuestLayout';
import MoviesCard from '@/components/element/MoviesCard';

const Movie = () => {
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
      <MoviesCard key={movie.id} movie={movie} />
     ))}
    </div>
    <div className="mt-8 flex justify-center items-center space-x-4">
     <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
      className="px-4 py-2 bg-third text-slate-800 hover:bg-third/70 rounded disabled:opacity-50 cursor-pointer"
     >
      Previous
     </button>
     <span className="dark:text-white">
      Page {page} of {totalPages}
     </span>
     <button
      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={page === totalPages}
      className="px-4 py-2 bg-third text-slate-800 hover:bg-third/70 rounded disabled:opacity-50 cursor-pointer"
     >
      Next
     </button>
    </div>
   </div>
  </GuestLayout>
 );
};

export default Movie;

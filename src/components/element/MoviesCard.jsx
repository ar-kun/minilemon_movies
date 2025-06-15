import { EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const MoviesCard = ({ movie }) => {
 const { i18n } = useTranslation();

 return (
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
 );
};

export default MoviesCard;

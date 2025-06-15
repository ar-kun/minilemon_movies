import { useEffect, useState } from 'react';
import movieService from '@/services/moviesServices';
import { Link, useParams } from 'react-router';
import GuestLayout from '@/components/layouts/GuestLayout';
import { StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const MovieDetail = () => {
 const { i18n } = useTranslation();
 const { movieId } = useParams();
 const [movie, setMovie] = useState(null);

 useEffect(() => {
  movieService.getMovieDetail(movieId).then(setMovie);
 }, [movieId]);

 if (!movie) return <p>Loading...</p>;

 return (
  <GuestLayout backgroundImage={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null}>
   <div className="container mx-auto px-4 py-8 relative z-10 text-white">
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 lg:items-center">
     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 rounded-lg shadow-lg" />
     <div className="md:w-2/3">
      <h1 className="text-4xl lg:text-7xl font-bold mb-4">{movie.title}</h1>
      <p className=" mb-4">{movie.overview}</p>
      <div className="flex items-center space-x-4 mb-4">
       <span className="text-yellow-500 font-semibold flex items-center justify-center self-center">
        <StarIcon className="w-5 h-5 inline mr-1 text-yellow-400 " />
        <span>{movie.vote_average != null ? `${movie.vote_average.toFixed(1)} (${movie.vote_count ?? 0} votes)` : 'No rating'}</span>
       </span>
       <span>
        {new Date(movie.release_date).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', {
         year: 'numeric',
         month: 'long',
        })}
       </span>
       <span>{movie.runtime} min</span>
       <p className="text-lg font-semibold">Genres :</p>
       <ul className="list-none flex gap-2">
        {movie.genres.map((genre) => (
         <li key={genre.id}>{genre.name},</li>
        ))}
       </ul>
      </div>
      <div className="flex gap-5">
       {/* button watch */}
       <Link
        to={`/movies/${movie.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-third text-secondary hover:bg-third/70 font-semibold py-2 px-4 rounded-lg mt-4 inline-block"
       >
        Watch Now
       </Link>

       <button
        disabled={!movie.videos?.results?.length}
        onClick={() => window.open(`https://www.youtube.com/watch?v=${movie.videos?.results[0].key}`, '_blank')}
        className={`font-semibold py-2 px-4 rounded-lg mt-4 ${
         movie.videos?.results?.length ? 'bg-third text-secondary hover:bg-third/70 cursor-pointer' : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
       >
        Watch Trailer
       </button>
      </div>
     </div>
    </div>
   </div>
  </GuestLayout>
 );
};

export default MovieDetail;

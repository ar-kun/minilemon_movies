import { useEffect, useState } from 'react';
import movieService from '@/services/moviesServices';
import { Link, useParams } from 'react-router';
import GuestLayout from '@/components/layouts/GuestLayout';
import { PlusIcon, StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const MovieDetail = () => {
 const { i18n } = useTranslation();
 const { movieId } = useParams();
 const [movie, setMovie] = useState(null);
 const [cast, setCast] = useState([]);

 useEffect(() => {
  movieService.getMovieDetail(movieId).then(setMovie);
  movieService.getMovieCast(movieId).then((data) => {
   setCast(data.cast);
  });
 }, [movieId]);

 if (!movie) {
  return (
   <div className="flex items-center justify-center h-64">
    <div className="w-12 h-12 border-4 border-third border-t-transparent rounded-full animate-spin"></div>
   </div>
  );
 }

 return (
  <GuestLayout backgroundImage={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null}>
   <div className="container mx-auto px-4 py-8 relative z-10 text-white">
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 lg:items-center">
     <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="w-full md:w-2/4 lg:w-1/3 rounded-lg shadow-md shadow-third/50"
     />
     <div className="md:w-2/4 lg:w-2/3">
      <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-center md:text-start">{movie.title}</h1>
      <p className="text-justify mb-4">{movie.overview}</p>
      <div className="flex flex-wrap items-center space-x-4 mb-4">
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
        {movie.genres.map((genre, index) => (
         <li key={genre.id}>
          {genre.name}
          {index === movie.genres.length - 1 ? '.' : ','}
         </li>
        ))}
       </ul>
      </div>
      <div className="flex gap-5 justify-center md:justify-start">
       {/* button watch */}
       <Link
        to={`/movies/${movie.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-third text-secondary hover:bg-third/70 font-semibold py-2 px-4 rounded-lg mt-4 inline-block shadow-md shadow-third/50 hover:shadow-none transition-shadow duration-300"
       >
        Watch Now
       </Link>

       <button
        disabled={!movie.videos?.results?.length}
        onClick={() => window.open(`https://www.youtube.com/watch?v=${movie.videos?.results[0].key}`, '_blank')}
        className={`font-semibold py-2 px-4 rounded-lg mt-4 ${
         movie.videos?.results?.length
          ? 'bg-third text-secondary hover:bg-third/70 cursor-pointer shadow-md shadow-third/50'
          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
       >
        Watch Trailer
       </button>
      </div>
      <div className="">
       <h2 className="text-2xl font-semibold mt-8 mb-4">Cast</h2>
       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {cast.slice(0, 7).map((actor) => (
         <div key={actor.id}>
          <img
           src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : '/assets/images/no-image.png'}
           alt={actor.name}
           className="w-20 h-20 md:w-15 md:h-15 lg:w-20 lg:h-20 rounded-full object-cover mx-auto mb-2"
          />
          <h3 className="text-base font-semibold flex flex-col items-center justify-center leading-5">
           <span className="text-center">{actor.name}</span>
           <span className="text-sm text-gray-400 italic text-center">{actor.character}</span>
          </h3>
         </div>
        ))}
        <div>
         <div className="relative w-20 h-20 md:w-15 md:h-15 lg:w-20 lg:h-20  mx-auto mb-2">
          {/* Gambar */}
          <img
           src={cast[8]?.profile_path ? `https://image.tmdb.org/t/p/w500${cast[8]?.profile_path}` : '/assets/images/no-image.png'}
           alt=""
           className="w-full h-full rounded-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-400/70 bg-opacity-60 rounded-full flex items-center justify-center">
           <PlusIcon className="w-6 h-6 text-white" />
          </div>
         </div>
         <h3 className="text-lg font-semibold flex flex-col items-center justify-center leading-5 text-center">
          <span className="text-center">and others</span>
         </h3>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </GuestLayout>
 );
};

export default MovieDetail;

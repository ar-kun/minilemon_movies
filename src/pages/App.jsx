import GuestLayout from '@/components/layouts/GuestLayout';
import { useEffect, useState } from 'react';
import movieService from '@/services/moviesServices';
import { EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const App = () => {
 const [movies, setMovies] = useState([]);
 const [movie, setMovie] = useState(null);
 const [cast, setCast] = useState([]);
 const [crew, setCrew] = useState([]);
 const [firstMovie, setFirstMovie] = useState({});
 const { i18n } = useTranslation();

 useEffect(() => {
  movieService.getMovies().then((data) => {
   const results = data.results || [];
   setMovies(results);

   if (results.length > 0) {
    const first = results[0];
    setFirstMovie(first);
    movieService.getMovieDetail(first.id).then(setMovie);
    movieService.getMovieCast(first.id).then((data) => {
     setCast(data.cast);
     setCrew(data.crew);
    });
   }
  });
 }, []);

 return (
  <GuestLayout backgroundImage={firstMovie.backdrop_path ? `https://image.tmdb.org/t/p/original${firstMovie.backdrop_path}` : null}>
   <div className="container mx-auto px-4 py-8 relative z-10 text-white">
    <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-20 lg:items-center">
     <div
      className="lg:w-2/3 h-dvh p-10 rounded-xl shadow-md shadow-third/50 bg-gradient-to-b from-black to-transparent flex flex-col justify-center items-center md:items-start text-white relative"
      style={
       firstMovie.poster_path
        ? {
           backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0,0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%), url(https://image.tmdb.org/t/p/original${firstMovie.poster_path})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
          }
        : {}
      }
     >
      <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-center md:text-start">{firstMovie.title}</h1>
      <div className="flex flex-wrap items-center space-x-4 mb-4">
       <span className="text-yellow-500 font-semibold flex items-center justify-center self-center">
        <StarIcon className="w-5 h-5 inline mr-1 text-yellow-400 " />
        <span>{firstMovie.vote_average != null ? `${firstMovie.vote_average.toFixed(1)} (${firstMovie.vote_count ?? 0} votes)` : 'No rating'}</span>
       </span>
       <span>
        {new Date(firstMovie.release_date).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', {
         year: 'numeric',
         month: 'long',
        })}
       </span>
       <span>{firstMovie.runtime} min</span>
      </div>
      <div className="flex gap-5 justify-center md:justify-start">
       <Link
        to={`/movies/${firstMovie.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-third text-secondary hover:bg-third/70 font-semibold py-2 px-4 rounded-lg mt-4 inline-block shadow-md shadow-third/50 hover:shadow-none transition-shadow duration-300 text-center"
       >
        Watch Now
       </Link>

       <button
        disabled={!firstMovie.videos?.results?.length}
        onClick={() => window.open(`https://www.youtube.com/watch?v=${firstMovie.videos?.results[0].key}`, '_blank')}
        className={`font-semibold py-2 px-4 rounded-lg mt-4 ${
         firstMovie.videos?.results?.length
          ? 'bg-third text-secondary hover:bg-third/70 cursor-pointer shadow-md shadow-third/50'
          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
       >
        Watch Trailer
       </button>
      </div>
      <div className="bg-third/50 absolute bottom-0 left-0 right-[20%] rounded-tr-xl rounded-bl-xl p-10 lg:grid grid-cols-2 gap-x-14 hidden md:block gap-y-5">
       <div className="md:mb-5 lg:mb-0">
        <h2 className="text-base font-bold">Storyline</h2>
        <p className="text-justify text-xs">{firstMovie.overview}</p>
       </div>
       <div className="md:mb-5 lg:mb-0">
        <h2 className="text-base font-bold">Genres</h2>
        <ul className="list-none flex flex-wrap gap-2">
         {movie && movie.genres?.length > 0 ? (
          movie.genres.map((genre, index) => (
           <li key={genre.id} className="text-xs">
            {genre.name}
            {index === movie.genres.length - 1 ? '' : ','}
           </li>
          ))
         ) : (
          <li className="text-xs">No genres available</li>
         )}
        </ul>
       </div>
       <div className="md:mb-5 lg:mb-0">
        <h2 className="text-base font-bold">Stars</h2>
        <ul className="list-none flex flex-wrap gap-2">
         {cast && cast.length > 0 ? (
          cast.slice(0, 7).map((actor, index, array) => (
           <li key={actor.id} className="text-xs leading-3">
            {actor.name}
            {index === array.length - 1 ? '.' : ', '}
           </li>
          ))
         ) : (
          <li className="text-xs">No cast available</li>
         )}
        </ul>
       </div>
       <div className="md:mb-5 lg:mb-0">
        <h2 className="text-base font-bold">Director / Writer</h2>
        {/* department Directing &  Writing*/}
        <ul className="list-none flex flex-wrap leading-0">
         {crew && crew.length > 0 ? (
          <li>
           <span className="text-sm">Directors:</span>{' '}
           {crew
            .filter((member) => member.department === 'Directing')
            .slice(0, 7)
            .map((member, index, array) => (
             <span className="text-xs leading-3" key={member.id}>
              {member.name}
              {index === array.length - 1 ? '.' : ', '}
             </span>
            ))}
          </li>
         ) : (
          ''
         )}
         {crew && crew.length > 0 ? (
          <p>
           <span className="text-sm">Writers:</span>{' '}
           {crew
            .filter((member) => member.department === 'Writing' && ['Screenplay', 'Story', 'Writer'].includes(member.job))
            .slice(0, 7)
            .map((member, index, array) => (
             <span className="text-xs leading-3" key={member.id + index}>
              {member.name}
              {index === array.length - 1 ? '.' : ', '}
             </span>
            ))}
          </p>
         ) : (
          <li className="text-xs">No crew available</li>
         )}
        </ul>
       </div>
      </div>
     </div>
     <div className="grid grid-cols-2 gap-x-6 gap-y-6">
      {movies.slice(1, 7).map((movie, index) => (
       <Link to={`/movies/${movie.id}`} key={movie.id} className={`rounded-lg overflow-hidden ${index % 2 !== 0 ? 'mt-12' : ''}`}>
        <div className="relative group">
         <div className="absolute inset-0 bg-slate-800/70 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-third text-slate-800 hover:bg-third/90 font-medium py-2 px-2 rounded-lg">
           <EyeIcon className="w-5 h-5 inline mr-2" />
           <span>Watch</span>
          </div>
         </div>

         <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg shadow-md shadow-third/50 lg:h-44"
         />
        </div>
       </Link>
      ))}
     </div>
    </div>
   </div>
  </GuestLayout>
 );
};

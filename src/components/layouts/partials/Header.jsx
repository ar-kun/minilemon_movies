import DarkModeToggler from '@/components/element/DarkModeToggler';
import { useState } from 'react';
import {
 ArrowDownIcon,
 ArrowTrendingUpIcon,
 ChevronDownIcon,
 ClockIcon,
 EyeIcon,
 FireIcon,
 PlusIcon,
 Square3Stack3DIcon,
} from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';
import Logo from '@public/assets/images/logo.webp';
import LanguageDropdown from '@/components/element/LanguageDropdown';
import { useTranslation } from 'react-i18next';

const Header = () => {
 const [showProduct, setShowProduct] = useState(false);
 const [showNav, setShowNav] = useState(false);

 const { t } = useTranslation();

 const movieFeatures = [
  {
   title: t('header.dropdown_movies.trending', { defaultValue: 'Trending' }),
   desc: t('header.dropdown_movies.trending_desc', { defaultValue: 'Discover the latest trending movies and TV shows.' }),
   icon: <ArrowTrendingUpIcon className="w-7 h-7 text-third/90 dark:text-third" />,
  },
  {
   title: t('header.dropdown_movies.popular', { defaultValue: 'Popular' }),
   desc: t('header.dropdown_movies.popular_desc', { defaultValue: 'Explore the most popular movies and TV shows.' }),
   icon: <FireIcon className="w-7 h-7 text-third/90 dark:text-third" />,
  },
  {
   title: t('header.dropdown_movies.recently', { defaultValue: 'Recently Added' }),
   desc: t('header.dropdown_movies.recently_desc', { defaultValue: 'Find the newest additions to our collection.' }),
   icon: <PlusIcon className="w-7 h-7 text-third/90 dark:text-third" />,
  },
  {
   title: t('header.dropdown_movies.upcoming', { defaultValue: 'Upcoming' }),
   desc: t('header.dropdown_movies.upcoming_desc', { defaultValue: 'Get a sneak peek at upcoming releases.' }),
   icon: <ClockIcon className="w-7 h-7 text-third/90 dark:text-third" />,
  },
 ];

 return (
  <header>
   <nav className="bg-white dark:bg-gray-800 shadow-sm px-4 sm:px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
     <div className="flex items-center space-x-8">
      <img className="max-w-[50px] h-auto" src={Logo} alt="MiniLemon Movies Logo" />
      <span className="hidden lg:flex text-base font-bold flex-col leading-none dark:text-white">
       <span>Mini</span>
       <span>Movies</span>
      </span>
      <button onClick={() => setShowNav((prev) => !prev)} className="lg:hidden text-base font-bold flex flex-col leading-none dark:text-white">
       <span>Mini</span>
       <span>Movies</span>
      </button>
      {/* Navigation Items */}
      <div
       className={`md:flex space-x-6 ${
        showNav ? 'flex' : 'hidden'
       } absolute md:static top-[10%] bg-white left-0 w-full md:bg-transparent p-4 md:p-0 z-10 justify-center md:justify-start shadow-sm dark:bg-gray-800 md:shadow-none border-b md:border-0 border-slate-200 lg:ms-10`}
      >
       <span className="font-bold text-gray-800 dark:text-white hover:text-third dark:hover:text-indigo-400">
        {t('header.home', { defaultValue: 'Home' })}
       </span>
       <div className="">
        <button
         onClick={() => setShowProduct((prev) => !prev)}
         className="flex items-center font-bold text-gray-800 dark:text-white hover:text-third dark:hover:text-indigo-400"
        >
         {t('header.movies', { defaultValue: 'Movies' })}
         <ChevronDownIcon className="w-4 h-4 ml-1" />
        </button>

        {/* Dropdown Menu */}
        <Transition
         show={showProduct}
         enter="transition ease-out duration-200"
         enterFrom="opacity-0 -translate-y-2"
         enterTo="opacity-100 translate-y-0"
         leave="transition ease-in duration-150"
         leaveFrom="opacity-100 translate-y-0"
         leaveTo="opacity-0 -translate-y-2"
        >
         <div className="absolute left-0 mt-4 w-screen bg-white dark:bg-gray-800 shadow-lg dark:border-gray-700 rounded-lg z-50 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           {movieFeatures.map((item, idx) => (
            <div key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition">
             <div className="flex items-center space-x-2 md:justify-center">
              {item.icon}
              <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
             </div>
             <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 md:text-center">{item.desc}</div>
            </div>
           ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t mt-4 pt-4 dark:border-gray-700 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700">
           <button className="py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <EyeIcon className="w-6 h-6 inline-block mr-2 text-secondary dark:text-primary" />
            <span>{t('header.dropdown_movies.last_watched', { defaultValue: 'Last Watched' })}</span>
           </button>
           <button className="py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <Square3Stack3DIcon className="w-6 h-6 inline-block mr-2 text-secondary dark:text-primary" />
            <span>{t('header.dropdown_movies.see_all', { defaultValue: 'See All Movies and TV Shows' })}</span>
           </button>
           <button className="py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <ArrowDownIcon className="w-6 h-6 inline-block mr-2 text-secondary dark:text-primary" />
            <span>{t('header.dropdown_movies.download', { defaultValue: 'Download' })}</span>
           </button>
          </div>
         </div>
        </Transition>
       </div>
       <span className="font-bold text-gray-800 dark:text-white hover:text-third dark:hover:text-indigo-400">
        {t('header.blogs', { defaultValue: 'Blogs' })}
       </span>
       <span className="font-bold text-gray-800 dark:text-white hover:text-third dark:hover:text-indigo-400">
        {t('header.about', { defaultValue: 'About' })}
       </span>
      </div>
     </div>

     {/* Right - Login */}
     <div className="flex items-center space-x-4">
      <LanguageDropdown />
      <DarkModeToggler />
      <div className="text-sm font-medium text-gray-800 dark:text-white hover:text-third dark:hover:text-indigo-400">Log in →</div>
     </div>
    </div>
   </nav>
  </header>
 );
};

export default Header;

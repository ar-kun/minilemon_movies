import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '@public/assets/images/logo.webp';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
const Footer = () => {
 const { t } = useTranslation();
 return (
  <footer className="bg-gray-800 text-white p-4">
   <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
     <div className="md:col-span-2 col-span-2 lg:col-span-3">
      <div className="flex items-center space-x-4 mb-4">
       <img className="max-w-[100px] h-auto" src={Logo} alt="MiniLemon Movies Logo" />
       <span className="text-2xl font-bold flex-col dark:text-white">Mini Movies</span>
      </div>
      <p className="text-justify">
       {t('footer.f_desc', {
        defaultValue:
         'MiniLemon Movies is a movie and TV show website that provides information about the latest movies and TV shows. We are committed to providing accurate and up-to-date information to our users.',
       })}
      </p>
     </div>
     <div className="md:col-span-1 col-span-2 lg:col-span-2">
      <h3 className="text-sm font-semibold text-white mb-4">{t('footer.navigation', { defaultValue: 'Navigation' })}</h3>
      <ul className="space-y-2 text-sm text-gray-300 flex flex-col">
       <Link to="/">{t('header.home', { defaultValue: 'Home' })}</Link>
       <Link to="/">{t('header.movies', { defaultValue: 'Movies' })}</Link>
       <Link to="/">{t('header.cast', { defaultValue: 'Cast' })}</Link>
       <Link to="/">{t('header.about', { defaultValue: 'About Us' })}</Link>
      </ul>
     </div>

     <div className="md:col-span-1 col-span-2 lg:col-span-2">
      <h3 className="text-sm font-semibold text-white mb-4">{t('footer.legal', { defaultValue: 'legal' })}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
       <li>{t('footer.terms_of_service', { defaultValue: 'Terms of service' })}</li>
       <li>{t('footer.privacy_policy', { defaultValue: 'Privacy policy' })}</li>
      </ul>
     </div>

     <div className="md:col-span-4 col-span-2 lg:col-span-5">
      <h3 className="text-sm font-semibold text-white mb-4">{t('footer.subscribe_title', { defaultValue: 'Subscribe to our Newsletter' })}</h3>
      <p className="text-sm text-gray-400 mb-4">
       {t('footer.subscribe_desc', { defaultValue: 'Tetap terupdate dengan berita dan pembaruan terbaru dari MiniLemon Movies.' })}
      </p>
      <form className="flex space-x-2">
       <input
        type="email"
        placeholder={t('footer.subscribe_placeholder', { defaultValue: 'Enter your email address' })}
        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
       />
       <button type="submit" className="px-4 py-2 bg-third hover:bg-third/70 text-secondary text-sm rounded-md font-semibold">
        {t('footer.subscribe', { defaultValue: 'Subscribe' })}
       </button>
      </form>
     </div>
    </div>

    <div className="mt-12 border-t pt-6 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between">
     <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} MiniLemon Movies, {t('footer.copyright', { defaultValue: 'Inc. All rights reserved.' })}
     </p>

     <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
       <FontAwesomeIcon icon={faFacebook} className="text-xl text-third hover:text-third/70 dark:text-third/70 dark:hover:text-third" />
      </a>
      <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
       <FontAwesomeIcon icon={faInstagram} className="text-xl text-third hover:text-third/70 dark:text-third/70 dark:hover:text-third" />
      </a>
      <a href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
       <FontAwesomeIcon icon={faTwitter} className="text-xl text-third hover:text-third/70 dark:text-third/70 dark:hover:text-third" />
      </a>
      <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
       <FontAwesomeIcon icon={faLinkedin} className="text-xl text-third hover:text-third/70 dark:text-third/70 dark:hover:text-third" />
      </a>
      <a href="https://youtube.com" target="_blank" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
       <FontAwesomeIcon icon={faYoutube} className="text-xl text-third hover:text-third/70 dark:text-third/70 dark:hover:text-third" />
      </a>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;

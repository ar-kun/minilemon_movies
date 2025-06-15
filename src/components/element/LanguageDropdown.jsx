import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
 const { i18n } = useTranslation();
 const [open, setOpen] = useState(false);

 const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  setOpen(false);
 };

 return (
  <div className="relative inline-block text-left">
   <button
    onClick={() => setOpen((prev) => !prev)}
    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-secondary hover:text-white bg-third rounded-lg p-2"
   >
    <span className="inline font-bold">{i18n.language === 'id' ? 'ID' : 'EN'}</span>
    <ChevronDownIcon className="w-4 h-4" />
   </button>

   <div
    className={`${
     open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    } transition-all duration-200 absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50`}
   >
    <div className="py-1">
     <button
      onClick={() => changeLanguage('id')}
      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
     >
      🇮🇩 Bahasa Indonesia
     </button>
     <button
      onClick={() => changeLanguage('en')}
      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
     >
      🇺🇸 English
     </button>
    </div>
   </div>
  </div>
 );
};

export default LanguageDropdown;

import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const GuestLayout = ({ children, backgroundImage = null }) => {
 return (
  <div className="font-display flex flex-col min-h-screen bg-primary dark:bg-gray-900">
   <Header />
   <main
    className="flex-grow p-4"
    style={
     backgroundImage
      ? {
         backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0,0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%), url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
        }
      : {}
    }
   >
    {backgroundImage && <div className="absolute z-[0] inset-0 backdrop-blur-sm" />}
    {children}
   </main>
   <Footer />
  </div>
 );
};

export default GuestLayout;

import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const GuestLayout = ({ children }) => {
 return (
  <div className="font-display flex flex-col min-h-screen bg-primary dark:bg-gray-900">
   <Header />
   <main className="flex-grow p-4">{children}</main>
   <Footer />
  </div>
 );
};

export default GuestLayout;

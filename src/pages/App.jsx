import DarkModeToggler from '../components/DarkModeToggler';

export const App = () => {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
   <h1 className="text-4xl font-bold mb-4">Welcome to MiniLemon Movies, Arkun</h1>
   <p className="text-lg text-gray-700">Your favorite movies at your fingertips!</p>
   <DarkModeToggler />
  </div>
 );
};

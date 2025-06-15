import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './pages/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Error from './pages/Error.jsx';
import './i18n';
import Movie from './pages/Movie.jsx';
import MovieDetail from './pages/MovieDetail.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  errorElement: <Error />,
 },
 {
  path: '/movies',
  element: <Movie />,
  errorElement: <Error />,
 },
 {
  path: '/movies/:movieId',
  element: <MovieDetail />,
  errorElement: <Error />,
 },
]);

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <ThemeProvider>
   <RouterProvider router={router} />
  </ThemeProvider>
 </StrictMode>
);

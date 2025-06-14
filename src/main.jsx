import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './pages/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
 },
]);

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <ThemeProvider>
   <RouterProvider router={router} />
  </ThemeProvider>
 </StrictMode>
);

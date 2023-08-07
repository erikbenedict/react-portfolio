import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import FruitPreserves from './pages/FruitPreserves';
import HypeHub from './pages/HypeHub';
import Mute from './pages/Mute';
import Project3 from './pages/Project3';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'fruitpreserves',
        element: <FruitPreserves />,
      },
      {
        path: 'hypehub',
        element: <HypeHub />,
      },
      {
        path: 'mute',
        element: <Mute />,
      },
      {
        path: 'project3',
        element: <Project3 />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

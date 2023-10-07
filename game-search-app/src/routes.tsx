import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import GamePage from './pages/GamePage';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path:'/games', element: <GamePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
]);
export default router;
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//

import SingleIdea from './pages/SingleIdea';
import Settings from './pages/Settings';
import Challenges from './pages/Challenges';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/Support';
import DashboardAppPage from './pages/DashboardAppPage';
import ChallengeListPage from './pages/ChallengesList';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'single-idea', element: <SingleIdea /> },
        { path: 'challenges', element: <Challenges /> },
        // { path: 'products', element: <ProductsPage /> },
        { path: 'settings', element: <Settings /> },
        { path: 'challengeslist', element: <ChallengeListPage /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

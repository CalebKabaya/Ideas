import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// user
import SingleIdea from './pages/SingleIdea';
import Settings from './pages/Settings';
import Challenges from './pages/Challenges';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import ChallengeListPage from './pages/ChallengesList';
// admin
import AdminSingleIdea from './adminpages/SingleIdea';
import AdminLogin from './adminpages/LoginPage';
import AdminForgotPass from './adminpages/ForgotPass';

import AdminSettings from './adminpages/Settings';
import AdminChallenges from './adminpages/Challenges';
// import AdminPage404 from './pages/Page404';
import AdminDashboardAppPage from './adminpages/AdminDashboardAppPage';
import AdminChallengeListPage from './adminpages/ChallengesList';

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
        { path: 'challenges/:challengeId', element: <Challenges /> }, 
        // { path: 'products', element: <ProductsPage /> },
        { path: 'settings', element: <Settings /> },
        { path: 'challengeslist', element: <ChallengeListPage /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/admin/app" />, index: true },
        { path: 'admin/app', element: <AdminDashboardAppPage /> },
        { path: 'admin/single-idea', element: <AdminSingleIdea /> },
        { path: 'admin/challenges', element: <AdminChallenges /> },
        { path: 'admin/challenges/:challengeId', element: <Challenges /> }, // Add this route
        { path: 'login', element: <AdminLogin /> },
        { path: 'forgotpass', element: <AdminForgotPass /> },
        { path: 'admin/settings', element: <AdminSettings /> },
        { path: 'admin/challengeslist', element: <AdminChallengeListPage /> },
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

import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// user
import SingleIdea from './pages/SingleIdea';
import Settings from './pages/Settings';
import Challenges from './pages/Challenges';
import Register from './pages/register';
import RegisterSuccess from './pages/registersuccess';
import CreatePassoword from './pages/createPassword';
import ForgotPass from './pages/forgotpass';
import RequestPass from './pages/requestpass';


import LoginPage from './pages/loginnew';
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

// import {AuthContext} from './hooks/AuthContext'; // Import your authentication context
// import { useContext } from 'react'; // Import useContext
import { useAuth } from './hooks/AuthContext'; // Import the useAuth hook



// ----------------------------------------------------------------------

export default function Router() {

  const { isAuthenticated } = useAuth(); // Access isAuthenticated from your authentication context

  // Your ProtectedRoute component
  const ProtectedRoute = ({ path, element }) => {
    return isAuthenticated ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/" replace />
    );
  };


  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />, // Setting LoginPage as the initial route
    },
    {
      path: '/registersuccess',
      element: <RegisterSuccess />,
    },
    { 
      path: '/registersuccess',
      element: isAuthenticated ? <RegisterSuccess /> : <Navigate to="/" replace />,
    },
    {
      path: '/createPassword',
      element: <CreatePassoword />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/forgotpassoword',
      element: <ForgotPass />,
    },
    {
      path: '/requestpassword',
      element: <RequestPass />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: 'app', element: <DashboardAppPage /> },
        { 
          path: 'app',
          element: isAuthenticated ? <DashboardAppPage /> : <Navigate to="/" replace />,
        },
        { 
          path: 'single-idea',
          element: isAuthenticated ? <SingleIdea /> : <Navigate to="/" replace />,
        },
        { 
          path: 'single-idea/:ideaId',
          element: isAuthenticated ? <SingleIdea /> : <Navigate to="/" replace />,
        },
        { 
          path: 'challenges',
          element: isAuthenticated ? <Challenges /> : <Navigate to="/" replace />,
        },
        { 
          path: 'challenges/:challengeId',
          element: isAuthenticated ? <Challenges /> : <Navigate to="/" replace />,
        }, 

        { 
          path: 'settings',
          element: isAuthenticated ? <Settings/> : <Navigate to="/" replace />,
        }, 

        { 
          path: 'challengeslist',
          element: isAuthenticated ? <ChallengeListPage/> : <Navigate to="/" replace />,
        },
        
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/admin/app" />, index: true },
        { 
          path: 'admin/app',
          element: isAuthenticated ? <AdminDashboardAppPage /> : <Navigate to="/" replace />,
        },
        // { path: 'admin/app', element: <AdminDashboardAppPage /> },
        // { path: 'admin/single-idea', element: <AdminSingleIdea /> },
        { 
          path: 'admin/single-idea/:ideaId',
          element: isAuthenticated ? <AdminSingleIdea /> : <Navigate to="/" replace />,
        },
        // { path: 'admin/single-idea/:ideaId', element: <AdminSingleIdea /> }, 
        // { path: 'admin/challenges', element: <AdminChallenges /> },
        { 
          path: 'admin/challenges',
          element: isAuthenticated ? <AdminChallenges /> : <Navigate to="/" replace />,
        },

        // { path: 'admin/challenges/:challengeId', element: <AdminChallenges /> }, 
        { 
          path: 'admin/challenges/:challengeId',
          element: isAuthenticated ? <AdminChallenges /> : <Navigate to="/" replace />,
        },

        // { path: 'login', element: <AdminLogin /> },

        { 
          path: 'login',
          element: isAuthenticated ? <AdminLogin  /> : <Navigate to="/" replace />,
        },

        // { path: 'forgotpass', element: <AdminForgotPass /> },
        { 
          path: 'forgotpass',
          element: isAuthenticated ? <AdminForgotPass  /> : <Navigate to="/" replace />,
        },

        // { path: 'admin/settings', element: <AdminSettings /> },
        { 
          path: 'admin/settings',
          element: isAuthenticated ? <AdminSettings  /> : <Navigate to="/" replace />,
        },

        // { path: 'admin/challengeslist', element: <AdminChallengeListPage /> },
        { 
          path: 'admin/challengeslist',
          element: isAuthenticated ? <AdminChallengeListPage  /> : <Navigate to="/" replace />,
        },
      ],
    },
    {
      path: '/404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

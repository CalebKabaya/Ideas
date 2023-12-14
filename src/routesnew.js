import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './useAuth'; // A custom hook to track authentication status
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

export default function Router() {
  const { isAuthenticated } = useAuth(); // Implement useAuth hook to track authentication status

  return (
    <>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard/*"
        element={isAuthenticated ? <DashboardRoutes /> : <Navigate to="/" />}
      />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </>
  );
}

function DashboardRoutes() {
  return (
    <>
      {/* Regular user dashboard routes */}
      <Route index element={<Navigate to="/dashboard/app" />} />
      {/* ... (other regular user routes) */}
      <Route index element={<Navigate to="/dashboard/app" />} />
      <Route path="app" element={<DashboardAppPage />} />
      <Route path="single-idea" element={<SingleIdea />} />
      <Route path="single-idea/:ideaId" element={<SingleIdea />} />
      <Route path="challenges" element={<Challenges />} />
      <Route path="challenges/:challengeId" element={<Challenges />} />
      <Route path="settings" element={<Settings />} />
      <Route path="challengeslist" element={<ChallengeListPage />} />

      {/* Admin dashboard routes */}
      <Route path="admin/*" element={<AdminDashboardRoutes />} />
    </>
  );
}

function AdminDashboardRoutes() {
  return (
    <>
      {/* Admin dashboard routes */}
      <Route index element={<Navigate to="/dashboard/admin/app" />} />
      {/* ... (other admin routes) */}
      <Route path="app" element={<AdminDashboardAppPage />} />
      <Route path="single-idea" element={<AdminSingleIdea />} />
      <Route path="single-idea/:ideaId" element={<AdminSingleIdea />} />
      <Route path="challenges" element={<AdminChallenges />} />
      <Route path="challenges/:challengeId" element={<AdminChallenges />} />
      <Route path="settings" element={<AdminSettings />} />
      <Route path="challengeslist" element={<AdminChallengeListPage />} />
    </>
  );
}

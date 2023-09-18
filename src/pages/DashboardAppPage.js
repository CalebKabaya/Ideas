import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button, Stack } from '@mui/material';

// Import your authentication context or state management here
// import { AuthContext } from './AuthContext';

// components
import Iconify from '../components/iconify';
import Modal from './Modal';

// sections
import {
  IdeasHistory,
} from '../sections/@dashboard/app/IdeasHistory';

// Define a PrivateRoute component
const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  const navigate = useNavigate(); // Use useNavigate for routing

  // Check authentication status
  if (!isAuthenticated) {
    navigate('/login'); // Redirect to the login page
    return null; // Return null to prevent rendering
  }

  return <Outlet />;
};

export default function DashboardAppPage() {
  const theme = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your authentication logic

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Ideas Portal</title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h6" gutterBottom>
            Ideas
          </Typography>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </Modal>
        </Stack>

        <Grid item xs={12} md={6} lg={8}>
          <IdeasHistory />
        </Grid>
      </Container>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography,Button,Stack } from '@mui/material';
// components
import Iconify from '../components/iconify';
import Modal from './Modal';

// sections
import {
 
  IdeasHistory,
} from '../sections/@dashboard/app/IdeasHistory'


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

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
        <title> Dashboard | Ideas Portal </title>
      </Helmet>

      <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Ideas
          </Typography>
         
          {/* <Modal  isOpen={isModalOpen} onClose={closeModal}/> */}



        
          {/* <Button  onClick={openModal} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add idea
          </Button> */}
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

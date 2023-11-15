import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

import { useState } from 'react';

// @mui
import { Grid, Container, Typography,Stack } from '@mui/material';

// components
import  Header from '../sections/admin/challenges/header';
import Modal from './Modal';



export default function DashboardAppPage() {
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
      <title> Dashboard: Challenges| Ideas Portal </title>
    </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
           
        </Stack>

      <Header />
      </Container>

  </>
  );
}

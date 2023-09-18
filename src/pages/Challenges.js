import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

import { useState } from 'react';

// @mui
import { Grid, Container, Typography,Stack } from '@mui/material';

// components
import  MyHeader from '../sections/challenges/header';
import Modal from './ChallengeModal';


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
          <Typography variant="h6" gutterBottom>
            Challenges
          </Typography>
          <Modal isOpen={isModalOpen} onClose={closeModal}/>
           
        </Stack>

      <MyHeader />
      </Container>

  </>
  );
}

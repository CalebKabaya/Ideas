import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

import { useState } from 'react';

// @mui
import { Grid, Container, Typography,Button,Stack } from '@mui/material';

// components
import  MyHeader from '../sections/challenges/header';
import  ChallengesList from '../sections/challenges/challengelist';

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

            Ideas Challenges
          </Typography>
          {/* <Button  className="submit-button"
      style={{
        backgroundColor: '#0086C9', 
        color: '#fff',             
        border: 'none',
        padding: '0 20px',         
        borderRadius: '3px',       
        cursor: 'pointer',
        outline: 'none',           
        fontFamily: 'Inter, sans-serif', 
        fontSize: '14px',          
        marginLeft: '10px',        
        height: '35px',            
        display: 'flex',
        alignItems: 'center',      
        justifyContent: 'center'   
      }}>+ Submit Your Idea
          </Button> */}
          {/* <Modal isOpen={isModalOpen} onClose={closeModal}/> */}
          
        </Stack>


      <MyHeader />

      
    </Container>
  </>
  );
}

import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

import { useState } from 'react';

// @mui
import { Grid, Container, Typography,Button,Stack } from '@mui/material';

// components
import  MyHeader from '../sections/challenges/header';




export default function DashboardAppPage() {
  
  return (
    <>
    <Helmet>
      <title> Dashboard: Challenges| Ideas Portal </title>
    </Helmet>

    
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Challenges
          </Typography>
          <Button  className="submit-button"
      style={{
        backgroundColor: '#0086C9', /* Blue background */
        color: '#fff',             /* Text color */
        border: 'none',
        padding: '0 20px',         /* Adjust padding for button size */
        borderRadius: '3px',       /* Set border radius to 3px */
        cursor: 'pointer',
        outline: 'none',           /* Remove button outline on focus */
        fontFamily: 'Inter, sans-serif', /* Use the Inter font */
        fontSize: '14px',          /* Set font size to 12px */
        marginLeft: '10px',        /* Add margin between buttons */
        height: '35px',            /* Set button height */
        display: 'flex',
        alignItems: 'center',      /* Center text vertically */
        justifyContent: 'center'   /* Center text horizontally */
      }}>+ Add idea
          </Button>
        </Stack>


      <MyHeader />
      </Container>

  </>
  );
}

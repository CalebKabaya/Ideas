import { Helmet } from 'react-helmet-async';

import { useState } from 'react';

// @mui
import { Grid, Container, Typography, Button, Stack, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// components
import ChallengesList from '../sections/admin/challenges/challengelist';
import Modal from './Modal';


export default function ChallengeListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
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
        </Stack>

        <Stack>
          <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse justify-start items-start flex-grow-0 flex-shrink-0 w-full lg:gap-0 md:gap-0 xs:gap-7 lg:mb-7 lg:mt-0 md:mb-0 xs:mb:0 ">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 lg:w-5/6 md:w-5/6 xs:w-full ">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Search for Challenge </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2.5">
                <TextField
                fullWidth
                  id="search"
                  type="search"
                  label="Search"
                  value={searchTerm}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 lg:w-1/6 md:w-1/6 xs:w-full lg:mt-12 md:mt-12 xs:mt-0">
            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            </div>

          </div>
        </Stack>
        <ChallengesList />
      </Container>
    </>
  );
}

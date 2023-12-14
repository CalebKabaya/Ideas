import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useUser } from '../../hooks/UserContext'; // Import the useUser hook

import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox ,Grid} from '@mui/material';
import Box from '@mui/material/Box';
import FileUpload from 'react-material-file-upload';

import { useState, useRef, useCallback } from 'react';
import logo from './Avatar_1.png';

import './settings.css';

export const Profile = () => {
  const [file, setFile] = useState();
  const { userData, setUser } = useUser();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };
  const { userId, userName, firstName, lastName, email } = userData;

  const currentAccount = {
    displayName: userName, // Use userName instead of {userName}
    email: email, // Use email instead of {email}
    photoURL: '/assets/images/avatars/avatar_default.jpg',
  };

  return (
<Grid>
<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>

<div className="">
      {/* <div className="bg-sky-500 sm:max-lg:bg-black"> */}

      <div className=" flex-col justify-start sm:flex-row items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 px-8">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
          <div className=" md:h-full md:w-48flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#101828]">
                  Profile Update
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm text-left text-[#475467]">
                  Edit details of your profile
                </p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />

          <div className="flex flex-col sm:flex-row  justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
            <div className="md:flex flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-auto relative">
              <p className="md:flex self-stretch flex-grow-0 flex-shrink-0 w-auto text-sm font-semibold text-left text-[#344054]">
                Your photo
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-auto text-sm text-left text-[#475467]">
                This will be displayed on your profile.
              </p>
            </div>
            {/* photo */}
            <div className="flex flex-col justify-between items-start flex-grow-0 flex-shrink-0 w-auto">
              {selectedFile && (
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={URL.createObjectURL(selectedFile)} sx={{ width: 80, height: 80 }} />
                </Stack>
              )}
              {/* <div className="flex justify-start pt-4 sm:pt-8 md:pt-0 lg:pt-0 xl:pt-0 pb-8 sm:pb-8 items-start flex-grow-0 flex-shrink-0 gap-4"> */}
              <div className="flex justify-start mb-2 sm:mb-4 mt-2 sm:mt-4 items-start flex-grow-0 flex-shrink-0 gap-4">

                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]">
                    <a href="#" className=" hover:underline text-[#475467]">
                      Delenjjjjjjjjjjjjjjjjjte
                    </a>
                  </p>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }} // Hide the file input
                  />
                  <button
                    className=" flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#088ab2]"
                    onClick={handleCustomButtonClick}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
            
            <div className="flex flex-col sm:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[280px] relative">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm font-semibold text-left text-[#344054]">
                  use   rname
                </p>
              </div>
              <div className="flex  justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[512px] gap-1.5">
                <Stack
                 
                  spacing={3}
                >
                  <TextField fullWidth name="username" label="Username " id="fullWidth" size="small" />
                </Stack>
                {/* <Box
                  component="form"
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    fullWidth
                    label="testuser"
                    id="fullWidth"
                    size="small"
                  />
                </Box> */}
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />

            <div className="flex flex-col sm:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[280px] relative">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm font-semibold text-left text-[#344054]">
                  Email address
                </p>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[512px] sm:max-lg:w-[100] gap-1.5">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
                  <div>
                  <Stack
                 
                 spacing={3}
               >
                 <TextField fullWidth name="email" label="Email address " id="fullWidth" size="small" />
               </Stack>
                    <div className="flex justify-start items-center flex-grow relative gap-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />
          </div>

          </div>

        </div>
      </div>

      <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 mt-6 gap-3">
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative ">
          <Stack direction="row" spacing={2}>
            <Button sx={{ textTransform: 'lowercase !important' }} variant="outlined">
              Cancel
            </Button>
          </Stack>
        </div>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative ">
          <Stack direction="row" spacing={2}>
            <Button sx={{ textTransform: 'lowercase !important' }} variant="contained" color="success">
              Save
            </Button>
          </Stack>
        </div>
      </div>
  </Grid>
</Grid>

    
  );
};

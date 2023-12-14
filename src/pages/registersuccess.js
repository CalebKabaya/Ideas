import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Paper, Typography, TextField, Button, Link, FormControlLabel, Checkbox } from '@mui/material';
import { authentication } from 'src/pages/extentionsfunctions';
import { toast, ToastContainer } from 'react-toastify';

import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import bgImage from './Background.jpg';
import logoImage from './logo2-removebg-preview.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    color: 'white',
  },
  logo: {
    width: '80px',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  input: {
    background: 'white',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0086C9', // Change the button background color
    color: 'white', // Change the button text color
    '&:hover': {
      backgroundColor: '#0073AD', // Change the button background color on hover
    },
  },
  detailsText: {
    color: '#0086C9',
    fontSize: '15px', // Adjust the font size of the placeholders
    fontWeight:'bold',
    marginTop: theme.spacing(1),
  },
  rememberMeCheckbox: {
    marginTop: theme.spacing(2),
  },
  inputPlaceholder: {
    fontSize: '12px', // Set the font size of the placeholders to 10px
  },
}));

function LoginForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState();
  const [email, setEmail] = useState('');


  const [loading, setLoading] = useState(false); // State to manage the loading indicator


  useEffect(() => {
    // Fetch email from local storage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    const delay = 10000; // 10 seconds delay (in milliseconds)
    const redirectTimer = setTimeout(() => {
      redirectToAnotherPage();
    }, delay);

    return () => clearTimeout(redirectTimer); // Clean up timer on component unmount
  }, []); // Empty dependency array to run this effect only once

  const redirectToAnotherPage = () => {
    navigate('/createPassword'); // Replace '/another-page' with your desired URL
  };


  const openGmailInbox = () => {
    if (email) {
      const gmailURL = `https://mail.google.com/mail/u/0/#inbox`;
      window.open(gmailURL, '_blank');
    } else {
      // Handle scenario where email is not available
      console.error('Email not found in local storage');
    }
  };


  return (
    <div className={classes.root}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <img src={logoImage} alt="Logo" className={classes.logo} />
          {/* <Typography variant="h6" className="text-[#101828] ">Registration was Succesfull</Typography> */}
          <Typography className={classes.detailsText}>Registration was Succesfull</Typography>
          <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6 mt-6">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-14 h-14 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_d_1020_7360)">
                <rect x="2" y="1" width="56" height="56" rx="12" fill="white"></rect>
                <rect x="2.5" y="1.5" width="55" height="55" rx="11.5" stroke="#EAECF0"></rect>
                <path
                  d="M18.3333 23.1667L27.8591 29.8348C28.6304 30.3747 29.0161 30.6447 29.4356 30.7493C29.8062 30.8416 30.1938 30.8416 30.5644 30.7493C30.9839 30.6447 31.3696 30.3747 32.1409 29.8348L41.6667 23.1667M23.9333 38.3334H36.0667C38.0268 38.3334 39.0069 38.3334 39.7556 37.9519C40.4142 37.6164 40.9496 37.081 41.2852 36.4224C41.6667 35.6737 41.6667 34.6936 41.6667 32.7334V25.2667C41.6667 23.3066 41.6667 22.3265 41.2852 21.5778C40.9496 20.9192 40.4142 20.3838 39.7556 20.0482C39.0069 19.6667 38.0268 19.6667 36.0667 19.6667H23.9333C21.9731 19.6667 20.9931 19.6667 20.2444 20.0482C19.5858 20.3838 19.0504 20.9192 18.7148 21.5778C18.3333 22.3265 18.3333 23.3066 18.3333 25.2667V32.7334C18.3333 34.6936 18.3333 35.6737 18.7148 36.4224C19.0504 37.081 19.5858 37.6164 20.2444 37.9519C20.9931 38.3334 21.9731 38.3334 23.9333 38.3334Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_1020_7360"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  ></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1020_7360"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1020_7360" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
              <p class="self-stretch flex-grow-0 flex-shrink-0 w-full text-base font-semibold text-center text-gray-700">
                Check your email
              </p>
              <p class="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-center text-[#475467]">
                <span class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-center text-[#475467]">
                  We sent a one time password to{' '}
                </span>
                <span class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-center text-[#475467]">
                  {email}
                </span>
              </p>
            </div>
          </div>
          <Button onClick={openGmailInbox} fullWidth variant="contained" className={classes.submit} disabled={loading}>
            {loading ? 'registering In...' : 'Go to Gmail'}
          </Button>
          <Link href="#" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
            Already Have an Account?
          </Link>
        </Paper>
      </Container>
    </div>
  );
}

export default LoginForm;

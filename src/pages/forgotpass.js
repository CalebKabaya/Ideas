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
    background: 'rgba(102, 96, 96, 0.3)',
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
    fontSize: '13px', // Adjust the font size of the placeholders
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

  const [loading, setLoading] = useState(false); // State to manage the loading indicator

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
  });

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await authentication();
        setAccessToken(res);
      } catch (error) {
        console.error('Error while getting access token:', error);
      }
    };

    getAccessToken();
  }, []);

  const handleChangePass = async (e) => {
    e.preventDefault();
    console.log('Data to be submitted:', formData);

    try {
      // Make a POST request to the API
      const response = await fetch('https://developer.britam.com/api/IdeasPortal/ForgotPassword', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successfully', response);

        // Save email to local storage after successful registration
        localStorage.setItem('userEmail', formData.email);
        // Use React-Toastify for success message
        toast.success('Request was Succesfull!');

        setTimeout(() => {
        navigate('/requestpassword');
      }, 3000);

      } else {
        console.error('Failed to register  to the API');
        // Use React-Toastify for error message
        toast.error('Request was unsuccessful. Please try again.');
      }
    } catch (error) {
      console.error('Error while registering:', error);
      // / Use React-Toastify for error message
      toast.error('Error while requesting. Please try again.');
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <img src={logoImage} alt="Logo" className={classes.logo} />
          <Typography variant="h5">Change Password</Typography>
          <Typography className={classes.detailsText}>Please enter the  details</Typography>
          <form className={classes.form} Validate onSubmit={handleChangePass} method="POST">
            <TextField
              required
              variant="outlined"
              margin="normal"
              sx={{ mt: 2 }}
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="name"
              autoFocus
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />

            <TextField
              required
              variant="outlined"
              margin="normal"
              sx={{ mt: 2 }}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />

            <Button type="submit" fullWidth variant="contained" className={classes.submit} disabled={loading}>
              {loading ? 'registering In...' : 'Request'}
            </Button>
            <Link href="/" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
              Back to Login..
            </Link>
          </form>
          {/* Add a conditional rendering for the loader */}
          {loading && <div>Loading...</div>}
        </Paper>
      </Container>
      <ToastContainer />

    </div>
  );
}

export default LoginForm;

// if (enteredEmail === 'pd-innovation@britam.com' && enteredPassword === '123456789') {
// } else if (enteredEmail === 'calebkabaya7@gmail.com' && enteredPassword === '123456789') {

//   const handleSignIn = (event) => {
//     event.preventDefault();
//     const enteredEmail = event.target.email.value;
//     const enteredPassword = event.target.password.value;

//     // Simulate authentication based on email and password
//     if (enteredEmail === 'pd-innovation@britam.com' && enteredPassword === '123456789') {
//       setLoading(true);
//       const userId = 123; // Simulated user ID after authentication

//       setTimeout(() => {
//         navigate('/dashboard/app', { state: { userId } });
//         setLoading(false);
//       }, 2000);
//     } else if (enteredEmail === 'calebkabaya7@gmail.com' && enteredPassword === '123456789') {
//       setLoading(true);
//       const adminUserId = 456; // Simulated admin user ID after authentication

//       setTimeout(() => {
//         navigate('/dashboard/admin/app', { state: { userId: adminUserId } });
//         setLoading(false);
//       }, 2000);
//     } else {
//       alert('Invalid email or password. Please try again.');
//     }
//   };

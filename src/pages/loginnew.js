import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Paper, Typography, TextField, Button, Link, FormControlLabel, Checkbox, Grid } from '@mui/material';
import { authentication } from 'src/pages/extentionsfunctions';
import { toast, ToastContainer } from 'react-toastify';
import { useUser } from '../hooks/UserContext'; // Import the useUser hook

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
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false); // State to manage the loading indicator

  // After successful login
  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await authentication();
        setAccessToken(res);
      } catch (error) {
        console.error('Error while getting access token:', error);
        toast.error('an error occoured!, please try again later');


      }
    };

    getAccessToken();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    var requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      redirect: 'follow',
    };

    try {
      const response = await fetch('https://developer.britam.com/api/IdeasPortal/UserLogin', requestOptions);
      if (response.ok) {
        const data = await response.json();
        const statusCode = data.status;
        console.log('Status Code:', statusCode);

        if (statusCode === 200) {
          // Extract user data from the response JSON
          const { userId, userName, firstName, lastName, email } = data;

          toast.success('Login successful!!');

          setUser({
            userId,
            userName,
            firstName,
            lastName,
            email,
          });

          setTimeout(() => {
            navigate('/dashboard/app', {});
          }, 1500);
          
        } else if (statusCode === 204) {
          toast.error('User Not found!!');
          setTimeout(() => {
            navigate('/register');
          }, 5000);

        } else if (statusCode === 202) {
          toast.success('New user, Create passowrod!');
          setTimeout(() => {
            navigate('/createPassword');
          }, 5000);  
        } else if (statusCode === 203) {
          toast.error('Wrong username or password!!');
          setTimeout(() => {
            navigate('/');
          }, 5000);
        } else if (statusCode === 201) {
          toast.error('User locked, please contact the admin!!');
          setTimeout(() => {
            navigate('/register');
          }, 5000);
        } else {
          // Handle other status codes if needed
          // For example:
          // toast.error('Unhandled status code');
        }
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  //   console.log('Data to be submitted:', formData);

  //   try {
  //     // Make a POST request to the API
  //     const response = await fetch('https://developer.britam.com/api/IdeasPortal/UserLogin', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${accessToken.access_token}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     console.log(response);
  //     if (response.ok) {
  //       console.log('Login successfully', response);
  //       // Use React-Toastify for success message
  //       toast.success('Login successfully!!');

  // setTimeout(() => {
  //   navigate('/dashboard/app');
  // }, 5000);
  //     } else {
  //       console.error('Failed to login  to the API');
  //       // Use React-Toastify for error message
  //       toast.error('login unsuccessful. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error while registering:', error);
  //     // / Use React-Toastify for error message
  //     toast.error('Error while login. Please try again.');
  //   }
  // };

  // try {
  //   // Make a POST request to the API
  //   const response = await fetch('https://developer.britam.com/api/IdeasPortal/UserLogin', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${accessToken.access_token}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   // console.log(response.text(), 'textttttttt');

  //   const data = await response.json(); // Parse response body as JSON

  //   console.log(response.Content, "textttttttt");

  //   if (response.ok) {
  //     console.log('Login successfully', response);

  //     console.log(data, 'checkkkkkkkkkk');
  //     // Check if the response message is "success"
  //     if (data && data.status === 'sucess') {
  //       // Use React-Toastify for success message
  //       toast.success('Login successfully!!');

  //       // Redirect to '/dashboard/app'
  //       navigate('/dashboard/app');
  //     } else {
  //       console.error('Failed to login to the API');
  //       // Use React-Toastify for error message
  //       toast.error('Wrong username or passoword. Please try again.');
  //     }
  //   } else {
  //     console.error('Failed to login to the API');
  //     // Use React-Toastify for error message
  //     toast.error('Login unsuccessful. Please try again.');
  //   }
  // } catch (error) {
  //   // console.error('Error while logging in:', error);
  //   // Use React-Toastify for error message
  //   toast.error('Error while login. Please try again.');
  // }
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // if (enteredEmail === 'pd-innovation@britam.com' && enteredPassword === '123456789') {
  // } else if (enteredEmail === 'calebkabaya7@gmail.com' && enteredPassword === '123456789') {

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <img src={logoImage} alt="Logo" className={classes.logo} />
          <Typography variant="h5">Welcome to Ideas portal</Typography>
          <Typography className={classes.detailsText}>Please enter your details</Typography>
          <form className={classes.form} Validate onSubmit={handleSignIn} method="POST">
            <TextField
              required
              variant="outlined"
              margin="normal"
              sx={{ mt: 2 }}
              fullWidth
              id="usename"
              label="username"
              name="userName"
              autoComplete="username"
              autoFocus
              value={formData.userName}
              onChange={handleChange}
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />

            {/* <FormControlLabel
              className={classes.rememberMeCheckbox}
              control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color="primary" />}
              label="Remember me for 30 days?"
            /> */}
            <Link href="/forgotpassoword" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
              Forgot password?
            </Link>
            <Button type="submit" fullWidth variant="contained" className={classes.submit} disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Link href="/register" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
              Don't have an Account?, Register!
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

// const handleSignIn = (event) => {
//   event.preventDefault();
//   const enteredEmail = event.target.email.value;
//   const enteredPassword = event.target.password.value;

//   // Simulate authentication based on email and password
//   if (enteredEmail === 'pd-innovation@britam.com' && enteredPassword === '123456789') {
//     setLoading(true);
//     const userId = 123; // Simulated user ID after authentication

//     setTimeout(() => {
//       navigate('/dashboard/app', { state: { userId } });
//       setLoading(false);
//     }, 2000);
//   } else if (enteredEmail === 'calebkabaya7@gmail.com' && enteredPassword === '123456789') {
//     setLoading(true);
//     const adminUserId = 456; // Simulated admin user ID after authentication

//     setTimeout(() => {
//       navigate('/dashboard/admin/app', { state: { userId: adminUserId } });
//       setLoading(false);
//     }, 2000);
//   } else {
//     alert('Invalid email or password. Please try again.');
//   }
// };

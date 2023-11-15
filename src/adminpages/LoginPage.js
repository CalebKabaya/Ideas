import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Paper, Typography, TextField, Button, Link, FormControlLabel, Checkbox } from '@mui/material';
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
  const [loading, setLoading] = useState(false); // State to manage the loading indicator

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleSignIn = () => {
    // Show loader when the sign-in process starts
    setLoading(true);

    // Simulating asynchronous login process with setTimeout
    setTimeout(() => {
      // After a timeout (simulating API call or authentication process), navigate to Dashboard
      navigate('/Dashboard');
      setLoading(false); // Hide the loader when the process completes
    }, 2000); // Simulating a 2-second delay, replace this with your actual login logic
  };

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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              sx={{ mt: 2 }}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                className: classes.input,
                classes: { input: classes.inputPlaceholder },
              }}
            />
            <FormControlLabel
              className={classes.rememberMeCheckbox}
              control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color="primary" />}
              label="Remember me for 30 days?"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit} /* Removed color property */
              onClick={handleSignIn}
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Link href="#" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
              Forgot password?
            </Link>
          </form>
          {/* Add a conditional rendering for the loader */}
          {loading && <div>Loading...</div>}
        </Paper>
      </Container>
    </div>
  );
}

export default LoginForm;

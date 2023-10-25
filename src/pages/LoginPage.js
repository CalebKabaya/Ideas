import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Paper, Typography, TextField, Button, Link, FormControlLabel, Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import bgImage from './Background.jpg';
import logoImage from './logo2-removebg-preview.png';
// import  './extentionsfunctions.js';
import { authentication } from './extentionsfunctions';

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
    marginTop: theme.spacing(2),
  },
  input: {
    background: 'white',
    '&:hover': {
      background: 'white',
    },
    '&:focus': {
      background: 'white', // Set the background to white even when focused
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0086C9',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0073AD',
    },
  },
  detailsText: {
    color: '#0086C9',
    fontSize: '13px',
    marginTop: theme.spacing(1),
  },
  rememberMeCheckbox: {
    marginTop: theme.spacing(2),
  },
  inputPlaceholder: {
    fontSize: '12px',
    transition: 'none',
  },
}));

function LoginForm() {
  const classes = useStyles();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState();

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSignIn = () => {
    // Add your authentication logic here
    navigate('/Dashboard'); // Navigate to the Dashboard component
  };

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
  }, [authentication]); // Add dependencies if necessary

  if (accessToken == null) {
    return 'loading';
  }
  console.log('Data', accessToken?.access_token);

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
              variant="filled"
              margin="normal"
              sx={{ mt: 4 }}
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
              variant="filled"
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
            <Button type="submit" fullWidth variant="contained" className={classes.submit} onClick={handleSignIn}>
              Sign In
            </Button>
            <Link href="#" variant="body2" style={{ color: 'white', textDecoration: 'white underline' }}>
              Forgot password?
            </Link>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default LoginForm;

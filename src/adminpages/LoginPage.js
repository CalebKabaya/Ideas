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
  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;

    if (enteredEmail === 'cmutuku@britam.com' && enteredPassword === 'Mbuguack7') {
      setLoading(true);

      setTimeout(() => {
        navigate('/Dashboard');
        setLoading(false);
      }, 2000);
    } else {
      alert('Invalid email or password. Please try again.');
    }
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
          <form className={classes.form} noValidate onSubmit={handleSignIn}>
            {/* <TextField
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
            /> */}

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
              value="cmutuku@britam.com" // Set the hardcoded email value
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
              value="Mbuguack7" // Set the hardcoded password value
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
             className={classes.submit}
             disabled={loading}
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

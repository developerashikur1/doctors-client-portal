import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import loginImage from '../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Contexts/AuthProvider/useAuth';


const Login = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const {authError, loginUser, user,signInUsingGoogle } = useAuth();
    const location= useLocation();
    const navigate = useNavigate();

    const handleOnchangeButton = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginDetails};
        newLoginData[field] = value;
        setLoginDetails(newLoginData);
    };

    const handleLoginForm = (e) =>{
        loginUser(loginDetails.email, loginDetails.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location, navigate);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>
                    <Typography sx={{mt:8}} variant="subtitle1" gutterBottom component="div">Login</Typography>
                    </Typography>
                    <form onSubmit={handleLoginForm}>
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Your Email"
                        type="email" 
                        name="email"
                        onChange={handleOnchangeButton}
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnchangeButton}
                        variant="standard" 
                        />
                        <Button sx={{width:'75%', mb:5}} type='submit' variant="contained">Sign In</Button>
                        <NavLink style={{textDecoration:'none'}} to="/register"><Button variant="text">Haven't Registered? Register now.</Button></NavLink>
                        <p>----------------- or ------------------</p>
                        <Button sx={{width:'75%', mb:5}} variant="contained" onClick={handleGoogleSignIn}>Sign in with Google</Button>
                        {!authError ? (user?.email && <Alert severity="success">Welcome !!!  Login successfully...</Alert>) : <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={loginImage} alt=""/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
import { Alert, Button, Container, Typography } from '@mui/material';
import React,{ useState } from 'react';
import {useHistory} from 'react-router'
import Grid from '@mui/material/Grid';
import loginImage from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Contexts/AuthProvider/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const {registerHome, isLoading, user, authError} = useAuth();
    const history = useHistory();

    const handleOnBlurButton = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginDetails};
        newLoginData[field] = value;
        setLoginDetails(newLoginData);
    };

    console.log(loginDetails)
    const handleLoginForm = (e) =>{
        if(loginDetails.password !== loginDetails.password2){
            alert('Password did not match');
            return;
        }
        registerHome(loginDetails.email, loginDetails.password, loginDetails.name, history)
        e.preventDefault();
    };


return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>
                    <Typography sx={{mt:8}} variant="subtitle1" gutterBottom component="div">Login</Typography>
                    </Typography>
                    {!isLoading ? <form onSubmit={handleLoginForm}>
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Your Name"
                        name="name"
                        type="text"
                        onBlur={handleOnBlurButton}
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlurButton}
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlurButton}
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:'75%', mb:5}}
                        id="standard-basic" 
                        label="Re-Type Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlurButton}
                        variant="standard" 
                        />
                        <Button sx={{width:'75%', mb:5}} type='submit' variant="contained">Register</Button>
                        <NavLink style={{textDecoration:'none'}} to="/login"><Button variant="text">Already Registered? Please login</Button></NavLink>
                        
                        {!authError ? (user.email && <Alert severity="success">Welcome !!!  Registered successfully...</Alert>) : <Alert severity="error">{authError}</Alert>}
                    </form>
                    :
                    <CircularProgress/>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={loginImage} alt=""/>
                </Grid>
            </Grid>
        </Container>
);
};

export default Register;
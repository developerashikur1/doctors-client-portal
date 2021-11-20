import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Contexts/AuthProvider/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {isLoading, user} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <CircularProgress/>
    };
    if(user.email){
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
   
};

export default PrivateRoute;
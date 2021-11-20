import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Contexts/AuthProvider/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {isLoading, user} = useAuth();
    const {admin} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <CircularProgress/>
    };
    if(user?.email && admin?.admin){
      return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
    
};

export default AdminRoute;
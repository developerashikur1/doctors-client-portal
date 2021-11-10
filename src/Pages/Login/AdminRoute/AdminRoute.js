import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Contexts/AuthProvider/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {isLoading, user} = useAuth();
    const {admin} = useAuth();

    if(isLoading){
        return <CircularProgress/>
    };

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin?.admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
      );
};

export default AdminRoute;
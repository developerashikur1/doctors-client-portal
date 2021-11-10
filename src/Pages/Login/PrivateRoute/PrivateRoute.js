import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Contexts/AuthProvider/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {isLoading, user} = useAuth();

    if(isLoading){
        return <CircularProgress/>
    };

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
      );
};

export default PrivateRoute;
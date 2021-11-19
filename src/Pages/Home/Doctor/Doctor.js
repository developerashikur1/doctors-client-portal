import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image} = doctor;
    return (
            <Grid style={{padding: '10px'}} item xs={12} md={4} sm={6}>
               <div style={{padding: '5px',  boxShadow:'1px 2px 5px grey'}}>
               <img
                style={{width: '300px', height: '250px'}}
                src={`data:image/jpeg;base64,${image}`}
                alt=''
                />
                <h2>{name}</h2>
               </div>
            </Grid>
    );
};

export default Doctor;
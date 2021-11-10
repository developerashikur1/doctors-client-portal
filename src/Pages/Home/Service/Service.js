import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    const {name, image, description} = service;
    return (
    <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, boxShadow:0, border:0}}>
        <CardMedia
        component="img"
        style={{
            height:'80px',
            width:'auto',
            margin:'0 auto'
        }}
        image={image}
        alt="green iguana"
      />
        <CardContent>
            <Typography variant="h5" component="div">
            {name}
            </Typography>
          
            <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        </Card>
    </Grid>
    );
};

export default Service;
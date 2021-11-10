import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';


const services = [
    {
        name:'Fluoride Treatment', 
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        image:fluoride,
    },
    {
        name:'Cavity Filling', 
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        image:cavity,
    },
    {
        name:'Teeth Whitening', 
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        image:whitening,
    }
]


const Services = () => {
    return ( 
    <Box >
        <Container style={{marginTop:100}}>
            <Typography variant="h5" sx={{ mb:3, fontWeight: 'bold' }} component="div">
                OUR SERVICES        
            </Typography>
            <Typography variant="h3" sx={{ mb:8, fontWeight: 'bold' }} component="div">
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service=><Service
                    key={service.name}
                    service = {service}
                    ></Service>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Services;
import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState} from 'react';
import Booking from '../Booking/Booking';

const AvaiableAppointment = ({date}) => {
    const [successfully, setSuccessfully] = useState(false);
    const posts =[
        {id:1, name:'Teeth Orthodontics', time:"8:00 AM - 9:00", space:'10 SPACES AVAIABLE', price: 15},
        {id:2, name:'Cosmetic Dentistry', time:"10:05 AM - 11:30", space:'10 SPACES AVAIABLE', price: 12},
        {id:3, name:'Teeth Cleening', time:"5:00 AM - 5:30", space:'10 SPACES AVAIABLE', price: 17},
        {id:4, name:'Cavity Protection', time:"7:00 AM - 8:30", space:'10 SPACES AVAIABLE', price: 18},
        {id:5, name:'Teeth Orthodontics', time:"8:00 AM - 9:00", space:'10 SPACES AVAIABLE', price: 16},
        {id:6, name:'Teeth Orthodontics', time:"8:00 AM - 9:00", space:'10 SPACES AVAIABLE', price: 15},
    ]
    return (
        <Container sx={{my:8}}>
            <Typography variant="h4" sx={{color:'info.main', mb:3}}>Avaiable Appointment on {date.toDateString()}</Typography>
            {successfully && <Alert severity="success">Appointment Submitted Successfully...</Alert>}
            <Grid container spacing={2}>
            {
                posts.map(post=><Booking 
                date={date}
                key={post.id}
                post={post}
                setSuccessfully={setSuccessfully}
                ></Booking>)
            }
            </Grid>
        </Container>
    );
};

export default AvaiableAppointment;
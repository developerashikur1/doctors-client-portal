import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModals from '../BookingModals/BookingModals';


const Booking = ({post, date, setSuccessfully}) => {
    const {name, space, time} = post;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{p:5}}>
                    <Typography variant="h5" sx={{fontWeight:500, color:'info.main'}}>{name}</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight:600}}>{time}</Typography>
                    <Typography variant="caption">{space}</Typography><br/>
                    <Button onClick={handleOpen} variant="contained" sx={{mt:3}}>BOOK APPOINTMENT</Button>
                </Paper>
        </Grid>
        <BookingModals
        date={date}
        post={post}
        open={open}
        handleClose={handleClose}
        setSuccessfully={setSuccessfully}
        ></BookingModals>
        </>
    );
};

export default Booking;
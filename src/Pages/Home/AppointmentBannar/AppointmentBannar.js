import React from 'react';
import Box from '@mui/material/Box';
import appointmentBannars from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Grid, Typography } from '@mui/material';



const AppointmentBg ={
    background: `url(${appointmentBannars})`,
    backgroundColor:'rgb(20, 37, 44, 0.849)', 
    backgroundBlendMode: 'darken',
    marginTop:'150px',
}

const varticalAlignment={
    display: 'flex',
    alignItems: 'center',
}
const AppointmentBannar = () => {
    return (
        <Box style={AppointmentBg} sx={{ flexGrow: 1 }}>
        <Grid style={{padding: 25}} container spacing={2}>
            <Grid style={varticalAlignment} item xs={12} md={5}>
                <img style={{width:"90%", marginTop:'-150px'}} src={doctor} alt=""/>
            </Grid>
            
            <Grid style={{...varticalAlignment, textAlign:'left'}} item xs={12} md={7}>
                        <Box>
                        <Typography variant="h5" sx={{fontWeight:'bold', color:'rgb(0,255,305)'}}>
                            APPOINMENT
                        </Typography>
                        <Typography variant="h3" sx={{ my:5, fontWeight: 'bold', color: 'whiteSmoke'}}>
                            Make an Appointment <br/> Today
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'whiteSmoke', fontWeight:300, fontSize:14}}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                        </Typography>
                        <Button variant="contained" sx={{color:'whiteSmoke', backgroundColor:'rgb(0,255,245)', mt:5}}>Learn More</Button>
                        </Box>
            </Grid>
        </Grid>
    </Box>
    );
};

export default AppointmentBannar;
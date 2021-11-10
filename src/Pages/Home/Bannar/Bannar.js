import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgImage from '../../../images/bg.png'
import chair from '../../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';

const bannarBg = {
    background: `url(${bgImage})`,

}

const varticalcenter = {
    display:'flex',
    alignItems: 'center',
    height: 450,
}
const Bannar = () => {

    return (
        <Container style={bannarBg} sx={{ flexGrow: 1, marginTop:5 }}>
            <Grid container spacing={2}>
                    <Grid style={{...varticalcenter, textAlign: 'left'}} item xs={12} md={5}>
                        <Box>
                            <Typography variant="h3" sx={{fontWeight: 'bold', color:'black'}}>
                                Your New Smile <br/> Start Hare
                            </Typography>
                            <Typography variant="h6" sx={{my:3, fontSize:14, fontWeight:300, color:'grey'}}>
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </Typography>
                            <Button variant="contained" sx={{color:'whiteSmoke', backgroundColor:'rgb(0,255,245)', mt:5}}>GET APPOINMENT</Button>
                        </Box>
                    </Grid>
                    <Grid style={varticalcenter} item xs={12} md={7}>
                        <img style={{width:"95%"}} src={chair} alt=''/>
                    </Grid>
                </Grid>
        </Container>
    );
};

export default Bannar;
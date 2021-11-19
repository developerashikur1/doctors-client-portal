import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Maintance = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item spacing={1} xs={12} md={4}>
                    <Card sx={{ minWidth: 275,padding:3, backgroundColor:"rgb(0,255,305)"}}>
                        <CardContent>
                            <Grid style={{display: 'flex',  alignItems: 'center', textAlign: 'left'}} spacing={1}>
                                <Grid item xs={4}>
                                <i style={{fontSize:60}} className="far fa-clock"></i>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography variant="h6">Opening Hours</Typography>
                                <Typography>Lorem come for buy</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item spacing={1} xs={12} md={4}>
                    <Card sx={{ minWidth: 275,padding:3, backgroundColor:"rgb(20, 37, 44, 0.849)"}}>
                        <CardContent>
                            <Grid style={{display: 'flex',  alignItems: 'center', textAlign: 'left'}} spacing={1}>
                                <Grid item xs={4}>
                                <i style={{fontSize:60, color: 'whiteSmoke'}} className="far fa-clock"></i>
                                </Grid>
                                <Grid style={{color: 'whiteSmoke'}} item xs={8}>
                                <Typography variant="h6">Visit Our Location</Typography>
                                <Typography>Lorem ipsum come buy</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item spacing={1} xs={12} md={4}>
                    <Card sx={{ minWidth: 275,padding:3, backgroundColor:"rgb(0,255,305)"}}>
                        <CardContent>
                            <Grid style={{display: 'flex',  alignItems: 'center', textAlign: 'left'}} spacing={1}>
                                <Grid item xs={4}>
                                <i style={{fontSize:60}} className="far fa-clock"></i>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography variant="h6">Contact us Now</Typography>
                                <Typography>Lorem ipsum for buy</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Maintance;



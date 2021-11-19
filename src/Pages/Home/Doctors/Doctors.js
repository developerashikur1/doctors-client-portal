import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    console.log(doctors);
    useEffect(()=>{
        fetch('https://boiling-hamlet-70962.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <h1>Our Doctors : {doctors?.length}</h1>
            <Container>
               {!doctors.length>0 ? <CircularProgress/> : <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>}
            </Container>
        </div>
    );
};

export default Doctors;
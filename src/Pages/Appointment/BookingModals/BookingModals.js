import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Contexts/AuthProvider/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModals = ({post,handleClose, open, date, setSuccessfully}) => {
  const {user} = useAuth();
  const {name, time} = post;

  const initialAppointmentDetails = {patientName:user.displayName, email: user.email, phone:''};
  const [appointmentsDetail, setAppointmentDetail] = useState(initialAppointmentDetails);


  const onBlurHandleChange = (e) =>{
    const field = e.target.name;
    const value = e.target.value;
    const newAppointmentsDetail = {...appointmentsDetail};
    newAppointmentsDetail[field] = value;
    setAppointmentDetail(newAppointmentsDetail);
  }


  const handleBookingSubmitButton = e =>{
        const appointment = {
          ...appointmentsDetail,
          time,
          serviceName:name,
          date: date.toLocaleDateString(),
        }
        
        // post appointment to database
        fetch('https://boiling-hamlet-70962.herokuapp.com/appointments',{
          method:'POST',
          headers:{ 
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(appointment)
        })
        .then(result=>result.json())
        .then(data=>{
          if(data.insertedId){
            setSuccessfully(true);
            setTimeout(function(){ setSuccessfully(false) }, 5000);
            handleClose();
          }
        })
        e.preventDefault();
  }
    return (
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography sx={{mb:2, textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmitButton}>
                <TextField
                disabled
                sx={{m:1}}
                style={{width: '100%'}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
                sx={{m:1}}
                style={{width: '100%'}}
                id="outlined-size-small"
                name='patientName'
                onBlur={onBlurHandleChange}
                defaultValue={user?.displayName}
                size="small"
                />
                <TextField
                sx={{m:1}}
                style={{width: '100%'}}
                id="outlined-size-small"
                name="email"
                onBlur={onBlurHandleChange}
                defaultValue={user?.email}
                size="small"
                />
                <TextField
                sx={{m:1}}
                style={{width: '100%'}}
                id="outlined-size-small"
                name="phone"
                onBlur={onBlurHandleChange}
                placeholder='Phone Number'
                size="small"
                />
                <TextField
                disabled
                sx={{m:1}}
                style={{width: '100%'}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />
                  <Button sx={{m:1}} style={{width: '100%'}} variant="contained" type="submit">
      Submit
    </Button>
            </form>
          </Box>
        </Modal>
      </div>
    );
};

export default BookingModals;
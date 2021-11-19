import { Button, Input, TextField } from '@mui/material';
import React, {useState} from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleOnSubmitForm = (e) =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
console.log(formData);
        fetch('https://boiling-hamlet-70962.herokuapp.com/doctors', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
        setSuccess('Doctor Added Successfully')
        console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
          });
    }
    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleOnSubmitForm}>
            <TextField
            required
            onChange={e=> setName(e.target.value)}
            sx={{width:'75%', mb:5}}            
            label="Name" 
            variant="filled" />

            <br/>

            <TextField
            onChange={e=> setEmail(e.target.value)}
            required
            sx={{width:'75%', mb:5}}
            type="email"
            label="Email" 
            variant="filled" />

            <br/>

            <Input 
            onChange={e=> setImage(e.target.files[0])}
            sx={{width:'75%', mb:5}}
            accept="image/*"
            type="file" />

            <br/>

            <Button
            sx={{width:'75%', mb:5}}
            type="submit"
            variant="contained">
               Add Doctor
            </Button>
            </form>
            {success && <p style={{color:'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;
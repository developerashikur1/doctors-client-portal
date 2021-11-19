import React, {useState} from 'react';
import { Alert, Button, TextField } from '@mui/material';
import useAuth from '../../../Contexts/AuthProvider/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    console.log(token);
    const handleOnBlur = (e) =>{
        setEmail(e.target.value);
    }
    
    const handleMakeAdmin = (e) =>{
        const admin ={email}
        fetch('https://boiling-hamlet-70962.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true);
                console.log(data)
            }
        })
        e.preventDefault();
    }
    return (
        <div>
           <form onSubmit={handleMakeAdmin}>
           <TextField 
           name="email"
           type="email"
           id="standard-basic" 
           onBlur={handleOnBlur}
           label="Standard" 
           variant="filled" 
           style={{width:"50%"}}
           />
           <Button style={{borderRadius:'0px', height:'3.5rem'}} type="submit" variant="contained">Make Admin</Button>
           </form>
           {success && <Alert severity="success">Welcome !!!  Login successfully...</Alert>}

        </div>
    );
};

export default MakeAdmin;

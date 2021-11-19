import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51Jvxr6C3cP1ix3u9q5bJ2jE3lAqDHh2FFcOnGAWZjlJUtp4yQuw2XX4TZAFITgAToMSiXKMHXkM95C9AI8ZJlr4Y00C4ldcSUr');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointments, setAppointments] = useState({});

    console.log(appointments)
    useEffect(()=>{
        fetch(`https://boiling-hamlet-70962.herokuapp.com/appointments/${appointmentId}`)
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[appointmentId])
    
    return (
        <div>
            <h2>Please pay: {appointments.patientName} for the services of: {appointments.serviceName}</h2>
            <h5>Pay: ${appointments.price}</h5>

            {appointments?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                appointments={appointments}
                ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;
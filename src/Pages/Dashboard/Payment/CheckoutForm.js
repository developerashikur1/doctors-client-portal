import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Contexts/AuthProvider/useAuth';



const CheckoutForm = ({appointments}) => {
    const {price, patientName, _id} = appointments;
    const stripe = useStripe();
    const elements= useElements();
    const [error, setError] =  useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [process, setProcess] = useState(false);
    const {user} = useAuth();
console.log(_id)
    useEffect(()=>{
        fetch('https://boiling-hamlet-70962.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data.clientSecret))
    },[price]);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        setProcess(true);
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        });
        if(error){
            setError(error.message)
            setSuccess('')
        }else{
            setError('')
            console.log(paymentMethod)
        }
        // card payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email,
                },
              },
            },
          );
          if(intentError){
              setError(intentError.message)
              setSuccess('')
              setTimeout(function(){ setProcess(false) }, 3000);
          }
          else{
              setError('');
              setSuccess('Your payment processed successfully.')
              console.log(paymentIntent)
              setProcess(false);

            // save to database
            console.log(paymentIntent.client_secret.split('_secret')[0])
            const payment= {
                amount:paymentIntent.amount,
                last4: paymentMethod.card.last4,
                created: paymentIntent.created,
                transaction: paymentIntent.client_secret.split('_secret')[0],

            }
            const url = `https://boiling-hamlet-70962.herokuapp.com/appointments/${_id}`;
              fetch(url,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
          }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {process ? <CircularProgress/> : <button type="submit" disabled={!stripe || success}>
        Pay ${price}
      </button>}
    </form>
    {
        error && <p style={{color: 'red'}}>{error}</p>
    }
   
    {
        success && <p style={{color: 'green'}}>{success}</p>
    }
   
        </div>
    );
};

export default CheckoutForm;
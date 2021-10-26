import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSighnup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
    <div className='form-cont'>
      <video src="Videos/signuppage.mp4" autoPlay loop muted/>
      <div className='form-container'>
    
        <div className='form-content-left'>
         <h1>Rentify is excited to serve you!</h1>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </div>
  );
};

export default Form;
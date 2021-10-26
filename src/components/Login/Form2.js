import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';

const Form2 = () => {
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
         <h1>Latest Offers awaiting for you!</h1>
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </div>
  );
};

export default Form2;